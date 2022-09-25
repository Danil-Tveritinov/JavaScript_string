// Найдите инпут по id и получите текст из инпута.

const list = document.getElementById('list')

for (let  i = 0; i < 10; i ++) {
    const elem = document.createElement('div')
    elem.classList.add('item')
    elem.innerText = `DIV #${i + 1}`

    list.appendChild(elem)
}

const button = document.getElementsByTagName('button')
console.log(button);
button[0].addEventListener('click', function() {
    const divItems = document.getElementsByClassName('item')

    for (let index in divItems) {
        if (index % 2 === 0) {
            if (divItems[index].classList.contains('back-red')) {
                divItems[index].classList.remove('back-red')
                divItems[index].classList.add('back-green')

            } else {
                divItems[index].classList.remove('back-green')
                divItems[index].classList.add('back-red')
            }
        }
    }
})