'use strict'
const calc = document.querySelector('.calc')
const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const price = document.querySelector('.price')
const priceValueRadios = document.querySelectorAll('.calc__priceValue-item')
const salary = document.querySelector('.salary')
const calculateBtn = document.querySelector('.calculate')

const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const modalError = document.querySelector('.modal__description')

const calculate = () => {
    if (days.value === '' || hours.value === '' || price.value === '') {
        modal.classList.add('modal__active')
        if (days.value === '') modalError.innerText = 'Please enter how many days did you work, for calculate your salary'
        if (hours.value === '') modalError.innerText = 'Please enter how many hours did you work per day, for calculate your salary'
        if (price.value === '') modalError.innerText = 'Please enter how much does your hour of work cost, for calculate your salary'
    }
    else {
        let priceValue = ''
        priceValueRadios.forEach(value => value.checked ? priceValue = value.value : '')

        salary.innerText = 'Your salary is:'

        const finallyPrice = (days.value * hours.value * price.value).toString().split( /(?=(?:\d{3})+(?!\d))/ ).toString().split(',').join(' ')
        if (priceValue === 'amd') salary.innerText += ` ${finallyPrice}.00 ֏`
        else if (priceValue === 'rub') salary.innerText += ` ${finallyPrice}.00 ₽`
        else salary.innerText += ` ${finallyPrice}.00 $`
        days.value = ''; hours.value = ''; price.value = ''
    }
}

document.addEventListener('click', event => {
    if (event.target === calculateBtn) calculate()
    else if (event.target === modalClose || event.target === modal) modal.classList.remove('modal__active')
})

calc.addEventListener('input', () => {
    days.value = days.value.replace(/[a-z A-Z]/g, '')
    hours.value = hours.value.replace(/[a-z A-Z]/g, '')
    price.value = price.value.replace(/[a-z A-Z]/g, '')
})


