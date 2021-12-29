const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector("#score");
//console.log(square);
//console.log(mole);
//console.log(score);


let result = 0;
let hitPosition;
let currentTime = 10;

function randomSquare () {
    squares.forEach( square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    //console.log(randomPosition);
    //console.log(Math.floor(Math.random() * 9));
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

squares.forEach(square =>{
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition ){
            result++;
            score.textContent = result;
            hitPosition == null;
        }
    })
});

function moveMole(){
    let timeID = null;
    timeId = setInterval(randomSquare,500);
}

moveMole();

function countDown(){
    currentTime--;

    if (currentTime ==0){
        clearInterval(countDownTimerId);
        score.append("game Over!" + result);
    }

}

let countDownTimerId = setInterval(countDown,500);