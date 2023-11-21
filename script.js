let name = document.querySelector('.name');

let myName = name.innerText;
let nameSize = myName.length;

name.innerText = "";
let i = 0;
let type = setInterval(() => {
    if (i < nameSize) {
        name.innerText += myName[i];
        ++i;
    } else {
        clearInterval(type);
    }
}, 100);
// setTimeout(() => {
//     clearInterval(type);
// }, 1300);