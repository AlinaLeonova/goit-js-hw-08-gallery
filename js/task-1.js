// Створи галерею з можливістю кліка по її елементах і перегляду повнорозмірного зображення в модальному вікні.
// Розбий завдання на кілька підзадач:

// Створення і рендер розмітки по масиву даних і наданим шаблоном.
// Реалізація делегування на галереї ul.js - gallery і отримання url великого зображення.
// Відкриття модального вікна при натисканні на елементі галереї.
// Підміна значення атрибута src елемента img.lightbox__image.
// Закриття модального вікна при натисканні на кнопку button[data - action= "close-modal"].
// Очищення значення атрибута src елемента img.lightbox__image.
// Це необхідно   для того, щоб при наступному відкритті модального вікна,
// поки вантажиться   зображення, ми не бачили попереднє.


import galleryItems from './gallery.js';

const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeModal = document.querySelector('.lightbox__button');

galleryItems.forEach((el) => {
    gallery.innerHTML += `<li class="gallery__item">
    <a class="gallery__link" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}">
    </a></li>`
})

const onGalleryClick = function (event) {
    event.preventDefault();
    if (event.target.nodeName === "IMG") {
        lightboxImage.src = event.target.dataset.source;
        lightbox.classList.add('is-open')
    }
}

closeModal.addEventListener('click', () => {
    lightbox.classList.remove('is-open')
    lightboxImage.src = '';
    // lightbox.classList.remove('lightbox__iamge')
})

// window.addEventListener('keydown', function (e) {
//     if (e.target.keyCode === 27) {
//         lightbox.classList.remove('is-open')
//     }
// });

gallery.addEventListener('click', onGalleryClick)