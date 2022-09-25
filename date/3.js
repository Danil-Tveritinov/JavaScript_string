// Выведите на экран текущий день недели (словом, по-русски). 
// Создайте для этого вспомогательную функцию showDay, 
// которая параметром принимает число, а возвращает 
// день недели по-русски. (use getDay())




let date = new Date();
let day = date.getDay();
// alert(days[day]);

function showDay(day) {
    const days = [
        'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 
        'суббота', 'воскресенье'
    ];
    return days[day];
}
console.log(showDay(day));


const date1 = new Date();

date1.setDate(30)
const day1 = date1.getDay();
console.log(day1);
let result = showDay(day1)
console.log(result);

let date2 = new Date();
date2.setDate(29)
let day2 = date2.getDay();
console.log(showDay(day2));