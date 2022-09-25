// Отследите события покидания миши блока.

const button100 = document.getElementById('for-events100')
let time = 0

button100.addEventListener("mouseover", function(){
    time = Date.now()
})

button100.addEventListener("mouseleave", function(){
    let between = (Date.now() - time) / 1000
    
    alert(between)
})