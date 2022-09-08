// В переменной date лежит дата в формате '2025-12-31'. 
// Преобразуйте эту дату в формат '31/12/2025'.

const date = '2025-12-31';
const info = date.split('-')

// const finalDate = info.join("/")
// console.log(finalDate);

console.log(info[2] + "/" + info[1] + "/" + info[0]);
console.log(`${info[2]}/${info[1]}/${info[0]}`);