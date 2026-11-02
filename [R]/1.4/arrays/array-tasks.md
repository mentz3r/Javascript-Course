# 40 задач на методы массивов

> Пункт роадмапа 1.4: «Решите 30–40 простых задач». Уровень простой (как Codewars 7–6 kyu). Задачи идут по методам, внутри группы от лёгкого к чуть более сложному.

**Прогресс: [20/40]**

## Как пользоваться

1. Создай папку, положи в неё `array-checks.html` и `checks.js`, а рядом создай пустой файл `solutions.js`.
2. В `solutions.js` пиши функции **с теми же именами и параметрами**, что в задачах (`function sum(numbers) { ... }` или `const sum = numbers => ...`).
3. Открой `array-checks.html` (двойной клик или Live Server) и обновляй страницу: увидишь, какие задачи проходят.
4. Каждая задача про конкретный метод. Если решишь циклом `for`, страница поставит 🟡: «работает, но нет нужного метода».

**Правила:** проверки берут только примеры из условия. Если в задаче не сказано менять массив на месте, исходные данные должны остаться как были. Если сказано «верни новый массив», верни именно новый. Задачи без подвохов: делай ровно то, что написано.

## A. forEach (задачи 1–3)

- [+] **1. `sumWithForEach(numbers)`**
  Верни сумму всех чисел массива. Используй `forEach` и переменную снаружи. Для пустого массива верни `0`.
  Примеры:
  - `sumWithForEach([1, 2, 3])` → `6`
  - `sumWithForEach([10, -4])` → `6`
  - `sumWithForEach([])` → `0`

- [+] **2. `numberedList(items)`**
  Верни новый массив строк вида `'номер. элемент'`, номер начинается с 1. Используй `forEach` с индексом и `push`.
  Примеры:
  - `numberedList(['a', 'b'])` → `['1. a', '2. b']`
  - `numberedList(['хлеб'])` → `['1. хлеб']`
  - `numberedList([])` → `[]`

- [+] **3. `indexesOfEven(numbers)`**
  Верни массив индексов, на которых стоят чётные числа (`0` тоже чётное). Используй `forEach` с индексом.
  Примеры:
  - `indexesOfEven([5, 2, 8, 3])` → `[1, 2]`
  - `indexesOfEven([1, 3])` → `[]`
  - `indexesOfEven([0, 7, 4])` → `[0, 2]`

## B. map (задачи 4–9)

- [+] **4. `doubleAll(numbers)`**
  Верни новый массив, где каждое число умножено на 2.
  Примеры:
  - `doubleAll([1, 2, 3])` → `[2, 4, 6]`
  - `doubleAll([])` → `[]`
  - `doubleAll([-1, 0, 5])` → `[-2, 0, 10]`

- [+] **5. `getNames(users)`**
  Верни массив имён пользователей (поле `name`).
  Примеры:
  - `getNames([{ name: 'Аня', age: 20 }, { name: 'Борис', age: 31 }])` → `['Аня', 'Борис']`
  - `getNames([])` → `[]`

- [+] **6. `addTax(pricesCents)`**
  Каждую цену (в центах) увеличь на 10% и округли до целого через `Math.round`.
  Примеры:
  - `addTax([1000, 2500, 999])` → `[1100, 2750, 1099]`
  - `addTax([0])` → `[0]`

- [+] **7. `formatPrices(pricesCents)`**
  Верни массив строк с ценами в долларах: `1250` → `'$12.50'`, `5` → `'$0.05'`.
  Примеры:
  - `formatPrices([1250, 5, 0])` → `['$12.50', '$0.05', '$0.00']`
  - `formatPrices([100])` → `['$1.00']`

- [+] **8. `capitalizeAll(words)`**
  Сделай первую букву каждого слова заглавной, остальные буквы не меняй. Слова непустые.
  Примеры:
  - `capitalizeAll(['аня', 'борис'])` → `['Аня', 'Борис']`
  - `capitalizeAll(['javaScript', 'css'])` → `['JavaScript', 'Css']`

- [+] **9. `markAllDone(todos)`**
  Верни новый массив задач, где у каждой `done: true`. Исходный массив и его объекты менять нельзя (подсказка: spread).
  Примеры:
  - `markAllDone([{ id: 1, name: 'a', done: false }, { id: 2, name: 'b', done: true }])` → `[{ id: 1, name: 'a', done: true }, { id: 2, name: 'b', done: true }]`

## C. filter (задачи 10–15)

- [+] **10. `onlyEven(numbers)`**
  Оставь в новом массиве только чётные числа.
  Примеры:
  - `onlyEven([1, 2, 3, 4])` → `[2, 4]`
  - `onlyEven([1, 3])` → `[]`
  - `onlyEven([0, -2, 5])` → `[0, -2]`

- [+] **11. `onlyDone(todos)`**
  Оставь только выполненные задачи (`done: true`).
  Примеры:
  - `onlyDone([{ id: 1, done: true }, { id: 2, done: false }, { id: 3, done: true }])` → `[{ id: 1, done: true }, { id: 3, done: true }]`
  - `onlyDone([{ id: 1, done: false }])` → `[]`

- [+] **12. `countDone(todos)`**
  Верни число выполненных задач. Сначала `filter`, потом `length`.
  Примеры:
  - `countDone([{ id: 1, done: true }, { id: 2, done: false }, { id: 3, done: true }])` → `2`
  - `countDone([])` → `0`

- [+] **13. `longWords(words, minLength)`**
  Оставь слова, длина которых не меньше `minLength`.
  Примеры:
  - `longWords(['hi', 'hello', 'js'], 3)` → `['hello']`
  - `longWords(['a', 'bb', 'ccc'], 2)` → `['bb', 'ccc']`

- [+] **14. `removeEmpty(strings)`**
  Убери пустые строки (`''`). Строка из одних пробелов не пустая, её оставляем.
  Примеры:
  - `removeEmpty(['a', '', 'b', ''])` → `['a', 'b']`
  - `removeEmpty([' ', 'x'])` → `[' ', 'x']`
  - `removeEmpty([])` → `[]`

- [+] **15. `cheaperThan(products, maxCents)`**
  Оставь товары, у которых `priceCents` строго меньше `maxCents`.
  Примеры:
  - `cheaperThan([{ name: 'a', priceCents: 500 }, { name: 'b', priceCents: 1500 }], 1000)` → `[{ name: 'a', priceCents: 500 }]`
  - `cheaperThan([{ name: 'a', priceCents: 1000 }], 1000)` → `[]`

## D. find и findIndex (задачи 16–20)

- [+] **16. `findFirstNegative(numbers)`**
  Верни первое отрицательное число. Если такого нет, верни `undefined`.
  Примеры:
  - `findFirstNegative([3, -1, -5])` → `-1`
  - `findFirstNegative([1, 2])` → `undefined`
  - `findFirstNegative([0, 4, -2])` → `-2`

- [+] **17. `findUserByName(users, name)`**
  Верни объект пользователя с таким именем. Если нет, верни `undefined`.
  Примеры:
  - `findUserByName([{ name: 'Аня', age: 20 }, { name: 'Борис', age: 31 }], 'Борис')` → `{ name: 'Борис', age: 31 }`
  - `findUserByName([{ name: 'Аня', age: 20 }], 'Вера')` → `undefined`

- [+] **18. `findProductById(products, id)`**
  Верни товар с таким `id`. Если нет, верни `undefined`. Это как `getProduct` в Amazon-проекте, только через `find`.
  Примеры:
  - `findProductById([{ id: 'a', name: 'x' }, { id: 'b', name: 'y' }], 'b')` → `{ id: 'b', name: 'y' }`
  - `findProductById([{ id: 'a', name: 'x' }], 'zzz')` → `undefined`

- [+] **19. `indexOfFirstLong(words, minLength)`**
  Верни индекс первого слова длиной не меньше `minLength`. Если такого нет, верни `-1`.
  Примеры:
  - `indexOfFirstLong(['a', 'abc', 'abcd'], 3)` → `1`
  - `indexOfFirstLong(['a', 'bb'], 5)` → `-1`

- [+] **20. `setQuantity(cart, productId, quantity)`**
  Найди в корзине товар с таким `productId` и поставь ему `quantity` (меняй объект прямо в корзине). Если такого товара нет, ничего не делай. Возвращаемое значение не важно.
  Примеры:
  - `setQuantity([{ productId: 'a', quantity: 1 }, { productId: 'b', quantity: 2 }], 'b', 5)` → массив станет `[{ productId: 'a', quantity: 1 }, { productId: 'b', quantity: 5 }]`
  - `setQuantity([{ productId: 'a', quantity: 1 }], 'z', 3)` → массив станет `[{ productId: 'a', quantity: 1 }]`

## E. some и every (задачи 21–24)

- [ ] **21. `hasNegative(numbers)`**
  Верни `true`, если в массиве есть хотя бы одно отрицательное число, иначе `false`.
  Примеры:
  - `hasNegative([1, -2, 3])` → `true`
  - `hasNegative([1, 2])` → `false`
  - `hasNegative([])` → `false`

- [ ] **22. `allPositive(numbers)`**
  Верни `true`, если все числа больше 0. Для пустого массива верни `true`.
  Примеры:
  - `allPositive([1, 2, 3])` → `true`
  - `allPositive([1, 0, 3])` → `false`
  - `allPositive([])` → `true`

- [ ] **23. `allDone(todos)`**
  Верни `true`, если все задачи выполнены (`done: true`), иначе `false`.
  Примеры:
  - `allDone([{ done: true }, { done: true }])` → `true`
  - `allDone([{ done: true }, { done: false }])` → `false`

- [ ] **24. `isSortedAscending(numbers)`**
  Верни `true`, если каждое число не меньше предыдущего. Пустой массив и массив из одного числа тоже `true`. Подсказка: `every` умеет получать индекс.
  Примеры:
  - `isSortedAscending([1, 2, 2, 5])` → `true`
  - `isSortedAscending([3, 1, 2])` → `false`
  - `isSortedAscending([])` → `true`
  - `isSortedAscending([7])` → `true`

## F. reduce (задачи 25–30)

- [ ] **25. `sum(numbers)`**
  Верни сумму чисел через `reduce`. Для пустого массива `0`.
  Примеры:
  - `sum([1, 2, 3])` → `6`
  - `sum([])` → `0`

- [ ] **26. `product(numbers)`**
  Верни произведение чисел через `reduce`. Для пустого массива `1`.
  Примеры:
  - `product([2, 3, 4])` → `24`
  - `product([])` → `1`

- [ ] **27. `maxNumber(numbers)`**
  Верни наибольшее число через `reduce` (`Math.max(...numbers)` использовать нельзя). Массив не пустой.
  Примеры:
  - `maxNumber([3, 9, 2])` → `9`
  - `maxNumber([-5, -2, -9])` → `-2`
  - `maxNumber([4])` → `4`

- [ ] **28. `cartTotal(items)`**
  Верни сумму `priceCents * quantity` по всем товарам корзины. Для пустой корзины `0`.
  Примеры:
  - `cartTotal([{ priceCents: 500, quantity: 2 }, { priceCents: 250, quantity: 1 }])` → `1250`
  - `cartTotal([])` → `0`

- [ ] **29. `countBy(words)`**
  Верни объект, где ключ это слово, а значение сколько раз оно встретилось.
  Примеры:
  - `countBy(['a', 'b', 'a'])` → `{ a: 2, b: 1 }`
  - `countBy([])` → `{}`

- [ ] **30. `groupByLength(words)`**
  Верни объект, где ключ это длина слова, а значение массив слов этой длины (в исходном порядке).
  Примеры:
  - `groupByLength(['a', 'bb', 'c', 'dd', 'eee'])` → `{ '1': ['a', 'c'], '2': ['bb', 'dd'], '3': ['eee'] }`
  - `groupByLength([])` → `{}`

## G. sort (без изменения исходного массива) (задачи 31–34)

- [ ] **31. `sortAscending(numbers)`**
  Верни новый массив, отсортированный по возрастанию. Исходный массив менять нельзя. Осторожно: без функции сравнения `sort` сортирует как строки.
  Примеры:
  - `sortAscending([10, 9, 1, 100])` → `[1, 9, 10, 100]`
  - `sortAscending([3, -1, 2])` → `[-1, 2, 3]`

- [ ] **32. `sortDescending(numbers)`**
  Верни новый массив, отсортированный по убыванию. Исходный массив менять нельзя.
  Примеры:
  - `sortDescending([10, 9, 1, 100])` → `[100, 10, 9, 1]`
  - `sortDescending([3, -1, 2])` → `[3, 2, -1]`

- [ ] **33. `sortByName(users)`**
  Верни новый массив пользователей, отсортированный по `name` по алфавиту (подсказка: `localeCompare`). Исходный массив менять нельзя.
  Примеры:
  - `sortByName([{ name: 'Борис' }, { name: 'Аня' }, { name: 'Вера' }])` → `[{ name: 'Аня' }, { name: 'Борис' }, { name: 'Вера' }]`

- [ ] **34. `sortByLength(words)`**
  Верни новый массив слов, отсортированный по длине по возрастанию. Слова одинаковой длины остаются в исходном порядке. Исходный массив менять нельзя.
  Примеры:
  - `sortByLength(['ccc', 'a', 'bb', 'dd'])` → `['a', 'bb', 'dd', 'ccc']`
  - `sortByLength(['bb', 'a'])` → `['a', 'bb']`

## H. slice и splice (задачи 35–37)

- [ ] **35. `firstN(list, n)`**
  Верни новый массив из первых `n` элементов (через `slice`). Если `n` больше длины, верни все элементы. Исходный массив менять нельзя.
  Примеры:
  - `firstN([1, 2, 3, 4], 2)` → `[1, 2]`
  - `firstN(['a', 'b'], 5)` → `['a', 'b']`

- [ ] **36. `removeAt(list, index)`**
  Удали элемент по индексу прямо в `list` (массив должен измениться) и верни удалённый элемент. Индекс считай корректным.
  Примеры:
  - `removeAt(['a', 'b', 'c'], 1)` → вернёт `'b'`, массив станет `['a', 'c']`
  - `removeAt(['x'], 0)` → вернёт `'x'`, массив станет `[]`

- [ ] **37. `insertAt(list, index, value)`**
  Вставь `value` на позицию `index` прямо в `list` (массив должен измениться). Возвращаемое значение не важно.
  Примеры:
  - `insertAt(['a', 'c'], 1, 'b')` → массив станет `['a', 'b', 'c']`
  - `insertAt([1, 2], 2, 3)` → массив станет `[1, 2, 3]`

## I. Цепочки методов (задачи 38–40)

- [ ] **38. `sumOfEvenSquares(numbers)`**
  Возьми чётные числа, возведи каждое в квадрат и сложи. Цепочка `filter`, `map`, `reduce`.
  Примеры:
  - `sumOfEvenSquares([1, 2, 3, 4])` → `20`
  - `sumOfEvenSquares([1, 3])` → `0`

- [ ] **39. `namesOfAdults(users)`**
  Верни имена пользователей, которым 18 лет и больше. Цепочка `filter` и `map`.
  Примеры:
  - `namesOfAdults([{ name: 'Аня', age: 20 }, { name: 'Боря', age: 15 }, { name: 'Вера', age: 18 }])` → `['Аня', 'Вера']`
  - `namesOfAdults([])` → `[]`

- [ ] **40. `todoSummary(todos)`**
  Верни строку вида `'2 из 5 выполнено'` (сколько задач с `done: true` из скольких всего). Подсказка: `filter().length`.
  Примеры:
  - `todoSummary([{ done: true }, { done: false }, { done: true }, { done: false }, { done: false }])` → `'2 из 5 выполнено'`
  - `todoSummary([])` → `'0 из 0 выполнено'`

