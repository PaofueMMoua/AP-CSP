const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus()
})

// function search_color() {
//     let input = document.getElementById("sb").value;
//     input = input.toLowerCase();
//     let x = document.getElementById("color");

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";
//         }
//     }
// }