import { addToCart, cart, loadFromStorage, removeFromCart } from '../../data/cart.js';

const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

describe('test suite: addToCart', () => {
    beforeEach(() => {
        spyOn(Storage.prototype, 'setItem');
    });

    it('adds an existing product to the cart', () => {
        spyOn(Storage.prototype, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 1,
                deliveryOptionId: '1'
             }]);
        });
        loadFromStorage();

        addToCart(productId1);
        expect(cart.length).toEqual(1);
        expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual(productId1);
        expect(cart[0].quantity).toEqual(2);
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
             }]));
    });

    it('adds a new product to the cart', () => {
        spyOn(Storage.prototype, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();

        addToCart(productId1);
        expect(cart.length).toEqual(1);
        expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual(productId1);
        expect(cart[0].quantity).toEqual(1);
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: productId1,
            quantity: 1,
            deliveryOptionId: '1'
        }]));
    });
});

describe('test suite: removeFromCart()', () => {
    beforeEach(() => {
        spyOn(Storage.prototype, 'setItem');
    });

    it('remove a product that is in the cart', () => {
        spyOn(Storage.prototype, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }]);
        });
        loadFromStorage();

        removeFromCart(productId2);

        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId1);
        expect(cart[0].quantity).toEqual(2);
        expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1);
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: productId1,
            quantity: 2,
            deliveryOptionId: '1'
        }]));
    });
});