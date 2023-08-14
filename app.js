const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const popup = document.querySelector('.popup');
const btnClose = document.querySelector("#btn_close");

btn.addEventListener('click', () => {
    popup.classList.add('show');
    container.style.filter = 'blur(2px)';
})

btnClose.addEventListener('click', (e) => {
    popup.classList.remove("show");
    container.style.removeProperty('filter');
})

