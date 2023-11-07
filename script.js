const toggled = document.querySelector('.toggle');
const innerCircle = document.querySelector('.inner-circle');
const price1b = document.querySelector('.price1b');
const price1 = document.querySelector('.price1')
const price2 = document.querySelector('.price2');
const price2b = document.querySelector('.price2b');
const price3 = document.querySelector('.price3');
const price3b = document.querySelector('.price3b');

toggled.addEventListener('click',()=>{
    innerCircle.classList.toggle('active')
    toggled.classList.toggle('active')
    price1.classList.toggle('active')
    price1b.classList.toggle('active')
    price2.classList.toggle('active')
    price2b.classList.toggle('active')
    price3.classList.toggle('active')
    price3b.classList.toggle('active')
})