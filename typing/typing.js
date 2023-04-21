const textEl = document.getElementById('text');
const buttonEl = document.getElementById('button');
const speedEl = document.getElementById('speed');
const text = 'SHRIMP FRIED RICE TO WAR';
let idx = 1;
let speed = 300;

updateText();

function updateText() {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(updateText, speed);
}


speedEl.addEventListener('input', (e) => {
    speed = 300 /e.target.value;
});