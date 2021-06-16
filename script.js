'use scrict';

// Получаем все Слайды
const slides = document.querySelectorAll('.slide');
// Получаем все описания картинок
const imgDescs = document.querySelectorAll('h3');
// Получаем Body
const body = document.querySelector('body');

// Массив с веб адресами картинок
const imgAdressArray = [
    'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
    'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1566566713478-131a85da90b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
];

// Массив с описанием картинок
const imgNamesArray = [
    'Morning coffe',
    'Space',
    'Japan',
    'Airsoft',
    'Beach'
];


// Добавляем селектор с измененным фоном ко всему Body
body.classList.add('bg-radial');

// Функция для изменения изображений и их описаний перебором элементов и массивов с новыми данными
function changeOldImg() {
    slides.forEach(slide => {
        slide.style.backgroundImage = "url('')";
    });
    imgDescs.forEach(imgDesc => {
        imgDesc.innerText = "";
    });
    for (let i = 0; i < 5; i++) {
        slides[i].style.backgroundImage = `url('${imgAdressArray[i]}')`;
        imgDescs[i].innerText = `${imgNamesArray[i]}`;
    }
}
changeOldImg();

// Функция очистки "Активного" статуса у элементов
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
});