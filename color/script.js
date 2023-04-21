const container = document.getElementById('container')
const colors = [ '#FF5733', '#FF2D00', '#EFFF00', '#17ff00', '#0001FF' ]
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setcolor(square))
    square.addEventListener('mouseout', () => removecolor(square))
}

function removecolor(element) {
    element.style.background = "#1d1d1d"
}

function setcolor(element) {
    const color = getRandomColors()
    element.style.background = color
}

function getRandomColors() {
    return colors[Math.floor(Math.random() * colors.length)]
}