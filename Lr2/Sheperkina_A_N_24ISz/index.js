// Переменные
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.slider__line');

const sliderBtnNext = document.querySelector('.slider__btn-next');
const sliderBtnPrev = document.querySelector('.slider__btn-prev');
        
let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

// Полностью убираем фон и границы у кнопок
sliderBtnNext.style.background = 'none';
sliderBtnNext.style.border = 'none';
sliderBtnNext.style.boxShadow = 'none';
sliderBtnNext.style.padding = '0';

sliderBtnPrev.style.background = 'none';
sliderBtnPrev.style.border = 'none';
sliderBtnPrev.style.boxShadow = 'none';
sliderBtnPrev.style.padding = '0';

// Перемотка слайдера вперед по нажатию на кнопку NEXT
sliderBtnNext.addEventListener('click', nextSlide);

// Перемотка слайдера назад по нажатию на кнопку PREV
sliderBtnPrev.addEventListener('click', prevSlide);

// Функции
function nextSlide() {
    sliderCount++;
    
    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }
    rollSlider();
}

function prevSlide() {
    sliderCount--;
    
    if (sliderCount < 0) {
        sliderCount = sliderImages.length -1;
    }
    rollSlider();
}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}