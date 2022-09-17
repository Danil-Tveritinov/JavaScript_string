// Создайте функцию, которая возвращает массив 
// целых чисел от n до 1, где n>0.
// Пример: n=5 --> [5,4,3,2,1] 

const arr = 5
 
function fa(n) {
    let res = [];
    for(let i = 1; i <= n; i++)
        res.push(i);
    return res;
    
}

console.log(fa(arr));

result = fa(arr).reverse();
console.log(result)
