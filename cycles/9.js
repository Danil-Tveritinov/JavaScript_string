// Составьте программу, которая принимает с 
// клавиатуры 10 целых положительных чисел и 
// выводит на экран, сколько из 
// них были чётными и сколько нечётными.

let k;
let n; 
let i;
let a;
k = 0;
n = 0;
for (i = 1; i <= 10; i++) {
a = parseFloat(window.prompt('Введите число'));
if (a % 2 == 0) {
k = k + 1;
} else {
n = n + 1;
}
}
window.alert(String('чётных чисел ') + String(k));
window.alert(String('нечётных чисел ') + String(n));
