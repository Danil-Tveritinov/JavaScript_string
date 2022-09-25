// Отследите события покидания миши блока.

const button4 = document.getElementById('for-events4')

button4.addEventListener("mouseout", function(){
    alert('Событие покидания мышью')
})