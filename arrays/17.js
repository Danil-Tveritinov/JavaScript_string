// Вы получаете массив чисел, возвращаете сумму всех положительных. 
// Пример [1,-4,7,12] => 1 + 7 + 12 = 20 
// Примечание: если суммировать нечего, сумма по умолчанию равна 0

const arr = [1, -4, 7, 12]
let summ = arr.reduce((a,v)=>v>0?a+v:a, 0);
console.log(summ);



let result = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0) continue
    else if(arr[i] > 0){
        result += arr[i]
    }
}
console.log(result);
