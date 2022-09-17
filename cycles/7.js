// Составьте программу, которая принимает с 
// клавиатуры два целых числа и выводит на экран 
// 10 случайных чисел в диапазоне от первого значения, 
// введенного с клавиатуры, до второго значения, также 
// введенного с клавиатуры. Будем считать, что первое 
// из вводимых чисел всегда меньше второго.

let a;
let b;
let i;
let c;
function math_random_int(a, b) {
if (a > b) {
let c = a;
a = b;
b = c;
}
return Math.floor(Math.random() * (b - a + 1) + a);
}
a = parseFloat(window.prompt('Введите первое число'));
b = parseFloat(window.prompt('Введите второе число'));
for (i = 1; i <= 10; i++) {
c = math_random_int(a, b);
window.alert(c);
}