// Составьте программу, которая принимает с 
// клавиатуры 8 целых чисел и выводит на экран, 
// сколько из них были больше, чем первое число.

let k;
let a;
let i;
let b;
k = 0;
a = parseFloat(window.prompt('Введите число'));
for (i = 1; i <= 7; i++) {
b = parseFloat(window.prompt('Введите число'));
if (b > a) {
k = k + 1;
}
}
window.alert(String(k) + String(' чисел больше первого'));
