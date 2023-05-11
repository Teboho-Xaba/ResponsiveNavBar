let bars = document.querySelector('.bars'), 
list = document.querySelector('.navItem')

bars.addEventListener('click', () => {
    list.classList.toggle('active')
})