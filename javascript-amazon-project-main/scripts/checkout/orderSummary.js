import { cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption } from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import formatCurrency from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';


export function renderOrderSummary() {
  updateCartQuantity();

  let cartSummaryHTML = '';

  cart.forEach(cartItem => {
    const { productId } = cartItem;

    const matchingProducts = getProduct(productId);

    const { deliveryOptionId } = cartItem;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );
    const dateString = deliveryDate.format('dddd, MMMM D');

    cartSummaryHTML += `
      <div class="cart-item-container 
      js-cart-item-container-${matchingProducts.id}">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProducts.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProducts.name}
                  </div>
                  <div class="product-price">
                    $${formatCurrency(matchingProducts.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label js-quantity-label-${matchingProducts.id}">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProducts.id}">
                      Update
                    </span>
                    <input class="quantity-input js-quantity-input-${matchingProducts.id}">
                    <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProducts.id}">Save</span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProducts.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHTML(matchingProducts, cartItem)}
                </div>
              </div>
            </div>
      `;
  });

  function deliveryOptionsHTML(matchingProducts, cartItem) {
    let html = '';

    deliveryOptions.forEach(deliveryOption => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
      );
      const dateString = deliveryDate.format('dddd, MMMM D');
      const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} - `;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option" data-product-id="${matchingProducts.id}" data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProducts.id}">
          <div>
            <div class="delivery-option-date">
                    ${dateString}
            </div>
            <div class="delivery-option-price">
                    ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });

    return html;
  }

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach(link => {
      link.addEventListener('click', () => {
        const { productId } = link.dataset;
        removeFromCart(productId);
        updateCartQuantity();
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();

        renderPaymentSummary();
      });
    });

  document.querySelectorAll('.js-update-link')
    .forEach(link => {
      const { productId } = link.dataset;

      link.addEventListener('click', () => {
        const updateElement = document.querySelector(`.js-cart-item-container-${productId}`);

        updateElement.classList.add('is-editing-quantity');

        // Тут работал еще с одной кнопкой: сделал так, чтобы при нажатии можно было и показывать, и скрывать элементы

        // if (updateElement.classList.contains('is-editing-quantity')) {
        //   isUpdating = false; 
        //   updateElement.classList.remove('is-editing-quantity');
        // }
        // else {
        //   updateElement.classList.add('is-editing-quantity');
        //   isUpdating = true;
        // }

      })
    });

  document.querySelectorAll('.js-save-link')
    .forEach(link => {
      const { productId } = link.dataset;

      link.addEventListener('click', () => {
        const updateElement = document.querySelector(`.js-cart-item-container-${productId}`);
        const productQuantity = Number(document.querySelector(`.js-quantity-input-${productId}`).value);
        const productQuantityLabel = document.querySelector(`.js-quantity-label-${productId}`);

        if (productQuantity < 0 || productQuantity >= 1000) {
          alert('Invalid product quantity !!!');
          updateQuantity(productId, 1);
          updateCartQuantity();
          productQuantityLabel.innerHTML = 1;
        } else {
          updateQuantity(productId, productQuantity);
          updateCartQuantity();
          productQuantityLabel.innerHTML = productQuantity;
        }
        updateElement.classList.remove('is-editing-quantity');
        document.querySelector(`.js-quantity-input-${productId}`).value = '';
        renderPaymentSummary();
      });
    });

  // РАЗОБРАТЬСЯ, КАК ДОБАВИТЬ ДВА EVENTTYPE (ЧТОБЫ РАБОТАЛО И ПО КЛИКУ, И ПРИ НАЖАТИИ ENTER) !!!!!!!!

  function updateCartQuantity() {
    calculateCartQuantity();

    document.querySelector('.js-cart-quantity-header')
      .innerHTML = `${calculateCartQuantity()} items`;
  }

  document.querySelectorAll('.js-delivery-option')
    .forEach(element => {
      element.addEventListener('click', () => {
        const {productId, deliveryOptionId} = element.dataset
        updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummary();
      });
    });
}