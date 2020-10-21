// window.addEventListener(
//     'scroll',
//     _.throttle(() => {
//         console.log('Scroll event handler invocation every 1000ms.');
//     }, 1000),
// );


// window.addEventListener(
//     'scroll',
//     _.debounce(() => {
//         console.log('Scroll event handler invocation every 500ms.');
//     }, 500),
// );


// const galleryItems = [
//     { preview: './img/1s.jpeg', fullview: './img/1L.jpeg', alt: "alt text 1" },
//     { preview: './img/2s.jpeg', fullview: './img/2L.jpeg', alt: "alt text 2" },
//     { preview: './img/3s.jpeg', fullview: './img/3L.jpeg', alt: "alt text 3" },
//     { preview: './img/4s.jpeg', fullview: './img/4L.jpeg', alt: "alt text 4" },
//     { preview: './img/5s.jpeg', fullview: './img/5L.jpeg', alt: "alt text 5" },
//     // { preview: './img/6s.jpeg', fullview: './img/6L.jpeg', alt: "alt text 6" },
// ];

// const fullview = document.querySelector('.fullview');
// const preview = document.querySelector('.preview');

// galleryItems.forEach((el) => {
//     preview.innerHTML += `<li><img src=${el.preview} alt=${el.alt} data-fullview=${el.fullview}></li>`
// })

// fullview.innerHTML = `<img src=${galleryItems[0].fullview} alt=${galleryItems[0].alt} width='1200' class="bigImg">`

// const clickPreview = function (event) {
//     if (event.target.nodeName === 'IMG') {
//         document.querySelector('.bigImg').src = event.target.dataset.fullview
//     }
// }

// preview.addEventListener('click', clickPreview)