// Создайте три переменные - час, минута, секунда. 
// С их помощью выведите текущее время в формате 'час:минута:секунда'.

let час = new Date()
let минута
let секунда

let now = час.toLocaleTimeString('en-US');
console.log(now);
alert(now)