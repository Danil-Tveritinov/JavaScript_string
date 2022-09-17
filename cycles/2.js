// Составьте программу, которая выводит на 
// экран 10 случайных чисел из диапазона -25...+25. 
// После каждого отрицательного числа следует 
// вывести (вплотную к числу) символ «?».

let i;
let a;
function math_random_int(a, b) {
if (a > b) {
let c = a;
a = b;
b = c;
}
return Math.floor(Math.random() * (b - a + 1) + a);
}
for (i = 1; i <= 10; i++) {
a = math_random_int(-25, 25);
if (a >= 0) {
window.alert(a);
} else {
window.alert(String(a) + String('?'));
}
}