// Файл проверки. Его трогать не нужно: пиши решения в solutions.js и открывай array-checks.html
(function () {
const GROUPS = [{"key":"A","title":"A. forEach"},{"key":"B","title":"B. map"},{"key":"C","title":"C. filter"},{"key":"D","title":"D. find и findIndex"},{"key":"E","title":"E. some и every"},{"key":"F","title":"F. reduce"},{"key":"G","title":"G. sort (без изменения исходного массива)"},{"key":"H","title":"H. slice и splice"},{"key":"I","title":"I. Цепочки методов"}];
const TASKS = [
  { id: 1, group: 'A', name: 'sumWithForEach', sig: 'numbers', nudge: ['.forEach'],
    cases: [
      { args: [[1, 2, 3]], out: 6 },
      { args: [[10, -4]], out: 6 },
      { args: [[]], out: 0 }
    ] },
  { id: 2, group: 'A', name: 'numberedList', sig: 'items', nudge: ['.forEach'],
    cases: [
      { args: [['a', 'b']], out: ['1. a', '2. b'] },
      { args: [['хлеб']], out: ['1. хлеб'] },
      { args: [[]], out: [] }
    ] },
  { id: 3, group: 'A', name: 'indexesOfEven', sig: 'numbers', nudge: ['.forEach'],
    cases: [
      { args: [[5, 2, 8, 3]], out: [1, 2] },
      { args: [[1, 3]], out: [] },
      { args: [[0, 7, 4]], out: [0, 2] }
    ] },
  { id: 4, group: 'B', name: 'doubleAll', sig: 'numbers', nudge: ['.map'],
    cases: [
      { args: [[1, 2, 3]], out: [2, 4, 6] },
      { args: [[]], out: [] },
      { args: [[-1, 0, 5]], out: [-2, 0, 10] }
    ] },
  { id: 5, group: 'B', name: 'getNames', sig: 'users', nudge: ['.map'],
    cases: [
      { args: [[{ name: 'Аня', age: 20 }, { name: 'Борис', age: 31 }]], out: ['Аня', 'Борис'] },
      { args: [[]], out: [] }
    ] },
  { id: 6, group: 'B', name: 'addTax', sig: 'pricesCents', nudge: ['.map'],
    cases: [
      { args: [[1000, 2500, 999]], out: [1100, 2750, 1099] },
      { args: [[0]], out: [0] }
    ] },
  { id: 7, group: 'B', name: 'formatPrices', sig: 'pricesCents', nudge: ['.map'],
    cases: [
      { args: [[1250, 5, 0]], out: ['$12.50', '$0.05', '$0.00'] },
      { args: [[100]], out: ['$1.00'] }
    ] },
  { id: 8, group: 'B', name: 'capitalizeAll', sig: 'words', nudge: ['.map'],
    cases: [
      { args: [['аня', 'борис']], out: ['Аня', 'Борис'] },
      { args: [['javaScript', 'css']], out: ['JavaScript', 'Css'] }
    ] },
  { id: 9, group: 'B', name: 'markAllDone', sig: 'todos', nudge: ['.map'],
    cases: [
      { args: [[{ id: 1, name: 'a', done: false }, { id: 2, name: 'b', done: true }]], out: [{ id: 1, name: 'a', done: true }, { id: 2, name: 'b', done: true }] }
    ] },
  { id: 10, group: 'C', name: 'onlyEven', sig: 'numbers', nudge: ['.filter'],
    cases: [
      { args: [[1, 2, 3, 4]], out: [2, 4] },
      { args: [[1, 3]], out: [] },
      { args: [[0, -2, 5]], out: [0, -2] }
    ] },
  { id: 11, group: 'C', name: 'onlyDone', sig: 'todos', nudge: ['.filter'],
    cases: [
      { args: [[{ id: 1, done: true }, { id: 2, done: false }, { id: 3, done: true }]], out: [{ id: 1, done: true }, { id: 3, done: true }] },
      { args: [[{ id: 1, done: false }]], out: [] }
    ] },
  { id: 12, group: 'C', name: 'countDone', sig: 'todos', nudge: ['.filter'],
    cases: [
      { args: [[{ id: 1, done: true }, { id: 2, done: false }, { id: 3, done: true }]], out: 2 },
      { args: [[]], out: 0 }
    ] },
  { id: 13, group: 'C', name: 'longWords', sig: 'words, minLength', nudge: ['.filter'],
    cases: [
      { args: [['hi', 'hello', 'js'], 3], out: ['hello'] },
      { args: [['a', 'bb', 'ccc'], 2], out: ['bb', 'ccc'] }
    ] },
  { id: 14, group: 'C', name: 'removeEmpty', sig: 'strings', nudge: ['.filter'],
    cases: [
      { args: [['a', '', 'b', '']], out: ['a', 'b'] },
      { args: [[' ', 'x']], out: [' ', 'x'] },
      { args: [[]], out: [] }
    ] },
  { id: 15, group: 'C', name: 'cheaperThan', sig: 'products, maxCents', nudge: ['.filter'],
    cases: [
      { args: [[{ name: 'a', priceCents: 500 }, { name: 'b', priceCents: 1500 }], 1000], out: [{ name: 'a', priceCents: 500 }] },
      { args: [[{ name: 'a', priceCents: 1000 }], 1000], out: [] }
    ] },
  { id: 16, group: 'D', name: 'findFirstNegative', sig: 'numbers', nudge: ['.find'],
    cases: [
      { args: [[3, -1, -5]], out: -1 },
      { args: [[1, 2]], out: undefined },
      { args: [[0, 4, -2]], out: -2 }
    ] },
  { id: 17, group: 'D', name: 'findUserByName', sig: 'users, name', nudge: ['.find'],
    cases: [
      { args: [[{ name: 'Аня', age: 20 }, { name: 'Борис', age: 31 }], 'Борис'], out: { name: 'Борис', age: 31 } },
      { args: [[{ name: 'Аня', age: 20 }], 'Вера'], out: undefined }
    ] },
  { id: 18, group: 'D', name: 'findProductById', sig: 'products, id', nudge: ['.find'],
    cases: [
      { args: [[{ id: 'a', name: 'x' }, { id: 'b', name: 'y' }], 'b'], out: { id: 'b', name: 'y' } },
      { args: [[{ id: 'a', name: 'x' }], 'zzz'], out: undefined }
    ] },
  { id: 19, group: 'D', name: 'indexOfFirstLong', sig: 'words, minLength', nudge: ['.findIndex'],
    cases: [
      { args: [['a', 'abc', 'abcd'], 3], out: 1 },
      { args: [['a', 'bb'], 5], out: -1 }
    ] },
  { id: 20, group: 'D', name: 'setQuantity', sig: 'cart, productId, quantity', nudge: ['.find'],
    cases: [
      { args: [[{ productId: 'a', quantity: 1 }, { productId: 'b', quantity: 2 }], 'b', 5], after: [[{ productId: 'a', quantity: 1 }, { productId: 'b', quantity: 5 }], 'b', 5] },
      { args: [[{ productId: 'a', quantity: 1 }], 'z', 3], after: [[{ productId: 'a', quantity: 1 }], 'z', 3] }
    ] },
  { id: 21, group: 'E', name: 'hasNegative', sig: 'numbers', nudge: ['.some'],
    cases: [
      { args: [[1, -2, 3]], out: true },
      { args: [[1, 2]], out: false },
      { args: [[]], out: false }
    ] },
  { id: 22, group: 'E', name: 'allPositive', sig: 'numbers', nudge: ['.every'],
    cases: [
      { args: [[1, 2, 3]], out: true },
      { args: [[1, 0, 3]], out: false },
      { args: [[]], out: true }
    ] },
  { id: 23, group: 'E', name: 'allDone', sig: 'todos', nudge: ['.every'],
    cases: [
      { args: [[{ done: true }, { done: true }]], out: true },
      { args: [[{ done: true }, { done: false }]], out: false }
    ] },
  { id: 24, group: 'E', name: 'isSortedAscending', sig: 'numbers', nudge: ['.every'],
    cases: [
      { args: [[1, 2, 2, 5]], out: true },
      { args: [[3, 1, 2]], out: false },
      { args: [[]], out: true },
      { args: [[7]], out: true }
    ] },
  { id: 25, group: 'F', name: 'sum', sig: 'numbers', nudge: ['.reduce'],
    cases: [
      { args: [[1, 2, 3]], out: 6 },
      { args: [[]], out: 0 }
    ] },
  { id: 26, group: 'F', name: 'product', sig: 'numbers', nudge: ['.reduce'],
    cases: [
      { args: [[2, 3, 4]], out: 24 },
      { args: [[]], out: 1 }
    ] },
  { id: 27, group: 'F', name: 'maxNumber', sig: 'numbers', nudge: ['.reduce'],
    cases: [
      { args: [[3, 9, 2]], out: 9 },
      { args: [[-5, -2, -9]], out: -2 },
      { args: [[4]], out: 4 }
    ] },
  { id: 28, group: 'F', name: 'cartTotal', sig: 'items', nudge: ['.reduce'],
    cases: [
      { args: [[{ priceCents: 500, quantity: 2 }, { priceCents: 250, quantity: 1 }]], out: 1250 },
      { args: [[]], out: 0 }
    ] },
  { id: 29, group: 'F', name: 'countBy', sig: 'words', nudge: ['.reduce'],
    cases: [
      { args: [['a', 'b', 'a']], out: { a: 2, b: 1 } },
      { args: [[]], out: {} }
    ] },
  { id: 30, group: 'F', name: 'groupByLength', sig: 'words', nudge: ['.reduce'],
    cases: [
      { args: [['a', 'bb', 'c', 'dd', 'eee']], out: { '1': ['a', 'c'], '2': ['bb', 'dd'], '3': ['eee'] } },
      { args: [[]], out: {} }
    ] },
  { id: 31, group: 'G', name: 'sortAscending', sig: 'numbers', nudge: ['.sort'],
    cases: [
      { args: [[10, 9, 1, 100]], out: [1, 9, 10, 100] },
      { args: [[3, -1, 2]], out: [-1, 2, 3] }
    ] },
  { id: 32, group: 'G', name: 'sortDescending', sig: 'numbers', nudge: ['.sort'],
    cases: [
      { args: [[10, 9, 1, 100]], out: [100, 10, 9, 1] },
      { args: [[3, -1, 2]], out: [3, 2, -1] }
    ] },
  { id: 33, group: 'G', name: 'sortByName', sig: 'users', nudge: ['.sort'],
    cases: [
      { args: [[{ name: 'Борис' }, { name: 'Аня' }, { name: 'Вера' }]], out: [{ name: 'Аня' }, { name: 'Борис' }, { name: 'Вера' }] }
    ] },
  { id: 34, group: 'G', name: 'sortByLength', sig: 'words', nudge: ['.sort'],
    cases: [
      { args: [['ccc', 'a', 'bb', 'dd']], out: ['a', 'bb', 'dd', 'ccc'] },
      { args: [['bb', 'a']], out: ['a', 'bb'] }
    ] },
  { id: 35, group: 'H', name: 'firstN', sig: 'list, n', nudge: ['.slice'],
    cases: [
      { args: [[1, 2, 3, 4], 2], out: [1, 2] },
      { args: [['a', 'b'], 5], out: ['a', 'b'] }
    ] },
  { id: 36, group: 'H', name: 'removeAt', sig: 'list, index', nudge: ['.splice'],
    cases: [
      { args: [['a', 'b', 'c'], 1], out: 'b', after: [['a', 'c'], 1] },
      { args: [['x'], 0], out: 'x', after: [[], 0] }
    ] },
  { id: 37, group: 'H', name: 'insertAt', sig: 'list, index, value', nudge: ['.splice'],
    cases: [
      { args: [['a', 'c'], 1, 'b'], after: [['a', 'b', 'c'], 1, 'b'] },
      { args: [[1, 2], 2, 3], after: [[1, 2, 3], 2, 3] }
    ] },
  { id: 38, group: 'I', name: 'sumOfEvenSquares', sig: 'numbers', nudge: ['.filter', '.map', '.reduce'],
    cases: [
      { args: [[1, 2, 3, 4]], out: 20 },
      { args: [[1, 3]], out: 0 }
    ] },
  { id: 39, group: 'I', name: 'namesOfAdults', sig: 'users', nudge: ['.filter', '.map'],
    cases: [
      { args: [[{ name: 'Аня', age: 20 }, { name: 'Боря', age: 15 }, { name: 'Вера', age: 18 }]], out: ['Аня', 'Вера'] },
      { args: [[]], out: [] }
    ] },
  { id: 40, group: 'I', name: 'todoSummary', sig: 'todos', nudge: ['.filter'],
    cases: [
      { args: [[{ done: true }, { done: false }, { done: true }, { done: false }, { done: false }]], out: '2 из 5 выполнено' },
      { args: [[]], out: '0 из 0 выполнено' }
    ] }
];

// ===== Движок проверки (не нужно читать, просто подключается страницей) =====
(function () {
  'use strict';

  function deepEqual(a, b) {
    if (Object.is(a, b)) return true;
    if (typeof a !== typeof b || a === null || b === null || typeof a !== 'object') return false;
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    if (Array.isArray(a)) return a.length === b.length && a.every((x, i) => deepEqual(x, b[i]));
    const ka = Object.keys(a), kb = Object.keys(b);
    return ka.length === kb.length && ka.every(k => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]));
  }

  function show(v) {
    if (v === undefined) return 'undefined';
    if (typeof v === 'string') return "'" + v + "'";
    if (Array.isArray(v)) return '[' + v.map(show).join(', ') + ']';
    if (v && typeof v === 'object') return '{ ' + Object.keys(v).map(k => k + ': ' + show(v[k])).join(', ') + ' }';
    return String(v);
  }

  // достаём функцию пользователя из глобальной области (работает и для function, и для const)
  function getUserFn(name) {
    try { return new Function('return typeof ' + name + " === 'function' ? " + name + ' : undefined;')(); }
    catch (e) { return undefined; }
  }

  function runTask(task) {
    const fn = getUserFn(task.name);
    if (!fn) return { status: 'missing' };
    for (const c of task.cases) {
      const args = structuredClone(c.args);
      const expectedArgs = c.after ? c.after : structuredClone(c.args);
      let res;
      try { res = fn(...args); }
      catch (e) { return { status: 'fail', msg: task.name + '(' + c.args.map(show).join(', ') + ') выбросила ошибку: ' + e.name + ': ' + e.message }; }
      if ('out' in c && !deepEqual(res, c.out)) {
        return { status: 'fail', msg: task.name + '(' + c.args.map(show).join(', ') + ') вернула ' + show(res) + ', а нужно ' + show(c.out) };
      }
      if (!deepEqual(args, expectedArgs)) {
        const changed = !c.after;
        return { status: 'fail', msg: task.name + '(' + c.args.map(show).join(', ') + '): ' + (changed ? 'функция изменила исходные данные, а менять их нельзя. После вызова массив стал ' : 'массив должен стать ') + show(changed ? args.find((a, i) => !deepEqual(a, expectedArgs[i])) : expectedArgs[0]) + (changed ? '' : ', а стал ' + show(args[0])) };
      }
    }
    const src = fn.toString();
    const missing = (task.nudge || []).filter(m => !src.includes(m));
    return missing.length ? { status: 'pass-nudge', msg: 'работает, но в коде не вижу ' + missing.map(m => m + '(').join(', ') + ' (задача на этот метод)' } : { status: 'pass' };
  }

  window.runAllChecks = function () {
    const results = TASKS.map(t => ({ task: t, r: runTask(t) }));
    const passed = results.filter(x => x.r.status === 'pass' || x.r.status === 'pass-nudge').length;
    return { results, passed, total: results.length };
  };

  window.renderChecks = function (root) {
    const { results, passed, total } = runAllChecks();
    const icon = { pass: '✅', 'pass-nudge': '🟡', fail: '❌', missing: '⬜' };
    let html = '<h1>Проверка задач по массивам: ' + passed + ' / ' + total + '</h1>' +
      '<p class="hint">✅ верно · 🟡 верно, но нет нужного метода · ❌ неверно · ⬜ функции ещё нет</p><table><tr><th></th><th>№</th><th>Функция</th><th>Что не так</th></tr>';
    let lastGroup = '';
    results.forEach(({ task, r }) => {
      const g = GROUPS.find(x => x.key === task.group);
      if (g.key !== lastGroup) { html += '<tr class="grp"><td colspan="4">' + g.title + '</td></tr>'; lastGroup = g.key; }
      html += '<tr class="' + r.status + '"><td>' + icon[r.status] + '</td><td>' + task.id + '</td><td><code>' + task.name + '(' + task.sig + ')</code></td><td>' + (r.msg || (r.status === 'missing' ? 'не написана' : '')) + '</td></tr>';
    });
    root.innerHTML = html + '</table>';
    console.log('Проверка массивов: ' + passed + ' / ' + total);
  };
})();

})();
