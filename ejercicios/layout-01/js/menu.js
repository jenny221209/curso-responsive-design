
addEventListener('DOMContentLoaded', () => {
    const nav__btn = document.querySelector('.nav__btn')

    if (nav__btn) {
        nav__btn.addEventListener('click', () => {
            const nav__menu = document.querySelector('.nav__menu');
            nav__menu.classList.toggle('show')
        })
    }
})