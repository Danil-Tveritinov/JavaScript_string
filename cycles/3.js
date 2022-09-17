// Составьте программу, которая выводит на 
// экран 8 случайных чисел из диапазона +5...+50. 
// Перед каждым числом, делящимся на 3 без остатка, 
// следует вывести (вплотную к числу) символ «#».


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
for (i = 1; i <= 8; i++) {
a = math_random_int(5, 50);
if (a % 3 == 0) {
window.alert(String('#') + String(a));
} else {
window.alert(a);
}
}
