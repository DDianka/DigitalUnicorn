const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const image = document.querySelector('.img');
let currentIndex = 0;

rightBtn.addEventListener('click', (e) => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    image.setAttribute('src', images[currentIndex]);
    console.log(currentIndex);
});
leftBtn.addEventListener('click', (e) => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    }else {
        currentIndex--;
    };
    image.setAttribute('src', images[currentIndex])
});
