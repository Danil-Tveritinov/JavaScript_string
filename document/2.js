// Выведите текст “Событие наведения мышью”, при наведении на кнопку.

const button = document.getElementById('for-events2')

button.addEventListener("mouseover", function(){
    alert('Событие наведения мышью')
})