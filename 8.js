// Дано число, необходимо вернуть противоположное число. 
// Примеры: 10 будет -10, 0 будет 0, -4 будет 4


// let a = prompt ("введите число")
// console.log(a * -1)

let a = prompt ("введите число")
function num(a) {
    if (a == 0) {
        return 0
    }
    const result = a * -1
    return result
}

console.log(num(a))
