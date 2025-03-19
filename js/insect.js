const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selected_insect

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        screens[1].classList.add('up')
        const img = btn.querySelector('img')
        const scr = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}


function increaseTime() {
    timeEl.innerHtml = 'Time: ${seconds}'
    seconds = seconds + 1;
}
