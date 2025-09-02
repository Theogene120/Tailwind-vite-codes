const open = document.getElementById('open')
const close = document.getElementById('close')
const nav = document.getElementById('nav')

open.addEventListener('click', () => {
    open.classList.toggle('hidden')
    close.classList.toggle('hidden')
    nav.classList.toggle('hidden')
})

close.addEventListener('click', () => {
    close.classList.toggle('hidden')
    open.classList.toggle('hidden')
    nav.classList.toggle('hidden')
})