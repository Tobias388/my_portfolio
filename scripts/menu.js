const menu_btn = document.querySelector('.menu_btn_container');
const menu_btn_line1 = document.getElementById('menu_btn_line1');
const menu_btn_line2 = document.getElementById('menu_btn_line2');
const menu_btn_line3 = document.getElementById('menu_btn_line3');

menu_btn.onclick = () => {
    menu_btn_line1.classList.toggle('active')
    menu_btn_line2.classList.toggle('active')
    menu_btn_line3.classList.toggle('active')
    header.classList.toggle('translate')
}