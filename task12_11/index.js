// // TASK 1
// document.getElementById('btn').addEventListener('click', () => { document.getElementById('text').style="display:none" });
//
// // TASK 2
//
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     btn.style="display: none";
// });
//
// // TASK 3
// // btn.addEventListener("click", () => alert ("1"));   // запустится
// // btn.removeEventListener("click", () => alert("1") ); // не запустится
// // btn.onclick = () => alert(2); // запустится
//
// // TASK 5
// const menuBtn = document.querySelector('#menu-btn');
// const menu = document.querySelector('.menu-list');
// console.log('menu', menu)
// console.log('menu', menuBtn)
// menuBtn.addEventListener('click', () => menu.classList.toggle('active'));
// // TASK 4
// const wrapper = document.querySelector('.wrapper');
// const circle = document.querySelector('.circle');
//
// wrapper.addEventListener('click', (e) => {
//     circle.style =`top: ${e.clientY}px; left: ${e.clientX}px;`
// });
//task 6
const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(elem => {
    elem.addEventListener('click', (event) => {
       // event.target.parentNode.style = 'display: none';
        event.target.parentNode.classList.add('hidden');
    });
});



