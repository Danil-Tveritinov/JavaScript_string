// Выведите текст “Привет”, при клике на кнопку


const elem = document.getElementById('block')

console.log(elem);

elem.style.border = '1px solid blue'



const block = document.getElementById('for-events')

block.addEventListener("mousedown", function(){
    alert('Привет')
})
