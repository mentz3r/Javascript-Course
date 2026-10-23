// 12j-12k

const multiply = (p1, p2) => p1*p2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

// 12l

function countPositive(nums) {
    let count = 0;

    nums.forEach(element => {
        if (element >= 0) {
            count += 1
        }
    });

    return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 12m

function addNum(array, num) {
    return array.map(element => element + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

// 12n

// function removeEgg(foods) {
//     return foods.filter(element => {
//         if (element === 'egg') {return false}
//         else { return true}
//     })
// }

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 12o

function removeEgg(foods) {

    let count = 0;

    return foods.filter(element => {
        if (element != 'egg' || count >= 2) {return true}
        else if (element === 'egg') {
            count += 1;
            return false; 
        }
    })

}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 12r - 12... LATER IN MY PROJECTS

