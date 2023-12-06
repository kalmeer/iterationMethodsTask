//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const a = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function fltr25(arr) {
  return arr >= 25;
}
function divby5(arr) {
  return arr % 5 == 0;
}
//let a = [1, 3, 5, 4, 5, 7, 8, 10, 14, 15, 16, 19, 36, 25, 26, 27, 28, 29, 30];
let q = a.filter(fltr25);
let w = a.filter(divby5);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function sqrd(arr) {
  return arr * arr;
}
function dbl(arr) {
  return arr * 2;
}
let as = a.map(sqrd);
let ad = a.map(dbl);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function fltr20(arr) {
  return arr >= 20;
}

/////////////////////////////////////////

function mult3(arr) {
  return arr * 3;
}

let afs = a.filter(fltr20).map(sqrd);
let bfs = a.filter(divby5).map(mult3);

console.log(q);
console.log(w);
console.log(as);
console.log(ad);
console.log(afs);
console.log(bfs);
