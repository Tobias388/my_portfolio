const specialization_info_main = document.querySelectorAll('.specialization_info_main');
const specialization_info_list = document.querySelectorAll('.specialization_info_list');
const specialization_btn_container = document.querySelectorAll('.specialization_btn_container');
const specialization_more = document.querySelectorAll('.specialization_more');

let count = 0;

for (let i = 0; i < specialization_btn_container.length; i++) {


    specialization_btn_container[i].onclick = () => {
        count++;

        specialization_info_main[i].classList.toggle('opacity')
        specialization_info_list[i].classList.toggle('opacity')

        if (count%2 != 0) {
            specialization_more[i].innerHTML = 'Saber menos';
        } else {
            specialization_more[i].innerHTML = 'Saber más';
        }
    }
}