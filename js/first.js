// строгий режим эту строчку ставить только тогда, когда в хтмл нет type="module"
'use strict';
// дальше идет весь код файла
const ypull = 'JavaScript is awesome'.toUpperCase();
console.log(ypull);

let a = 10;
console.log(a);

let namer = "Mango";
console.log("Your name is: ", namer);

let name;
console.log(name);

const d = 'JavaScript is awesome!';
console.log(typeof d);

// const red = confirm('Please,push on!')
// console.log(red);
// const yellow = prompt('Please,push on!')
// console.log(yellow);

// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y);

// let value = 18;

// // Аналогично записи value = value + 10;
// value += 100;
// console.log(value); // 15
let result;

result = 5 + 5 + '5' + '5' + 9;
console.log(result); // '555'

let salary = 23576859.688586845;
// salary = Number(salary.toFixed(2));
// salary = Number(salary);
// console.log(salary);
console.log(Number(salary.toFixed(2)));