// Составьте программу, которая принимает с клавиатуры 
// положительное целое число x и подсчитывает его «базу», 
// т.е. сумму всех положительных целых чисел, меньших x.

let s;
let x;
let i;
s = 0;
x = parseFloat(window.prompt('Введите число'));
let i_end = x - 1;
let i_inc = 1;
if (1 > i_end) {
i_inc = -i_inc;
}
for (i = 1;
i_inc >= 0 ? i <= i_end : i >= i_end;
i += i_inc) {
s = s + i;
}
window.alert(String('база числа = ') + String(s));
