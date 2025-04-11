const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

//lpaddle
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 10
let LPaddleHeight = 100
let LPaddleSpeed = 5

const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
let ballXPosition = windowWidth/2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
const ball = document.createElement('div')
document.body.appendChild(ball)

let score = 0 //display the score and increase score by one everytime the ball hits the paddle
let level = 1 //display the level and increase the level by one everytime the score increases by 10
//as levels increase, increase ball speed
// if ball gets past the paddle, end game
//make ball stop or disappear and let user know game is over

setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2*ballRadius){
        ballXDirection = ballXDirection * -1
    }

}

createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "pink"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight/2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`
}

create LPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${windowHeight / 2 - LPaddleHeight / 2}px`
}

    if(
        (ballBottom >= LPaddleTop)
        (ballTop <= LPaddleBottom)
        (ballLeft <= LPaddleRight)
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }

document.addEventListener('keyup', (event) => {
    if (event.key == 'w'){
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (event.key == 's'){
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
})

let ballTop = ballPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let LPaddleTop = LPaddleYPosition
let LPaddleBottom = LPaddleYPosition + LPaddleHeight
let LPaddleRight = LPaddleXPosition + LPaddleWidth


document.addEventListener('keydown', (event) => {
    if (event.key == 'w'){
        wKey = true
    }
    if (event.key == 's'){
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w'){
        wKey = false
    }
    if (event.key == 's'){
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()
