// Составьте программу, которая принимает с клавиатуры два целых 
// числа и выводит на экран следующие значения (каждое в отдельной строке): 
// квадрат каждого числа (отдельно) и сумму квадратов введенных чисел.


let num = prompt("Введи первое число")
let num1 = prompt("Введи второе число")
let num2 = Math.pow(num, 2)
let num3 = Math.pow(num1, 2)
num = Number(num)
num1 = Number(num1)
num2 = Number(num2)
num3 = Number(num3)
console.log(Math.pow(num, 2));
console.log(Math.pow(num1, 2));
console.log(num2 + num3);
