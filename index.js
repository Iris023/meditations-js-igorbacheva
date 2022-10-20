const startButton = document.querySelector('#myButton');
const video = document.querySelector('#myVideo');
const audio = document.querySelector('#player');
const timerBlock = document.querySelector('#countdown');

const timer = 5; 

startButton.addEventListener('click', startMeditation);


function startMeditation(){
    startButton.setAttribute("disabled", "disabled");
    timerBlock.classList.remove("displayNone");
    timerBlock.classList.add("timerDisplay");
    video.play();
    audio.play();

    let amountTime = timer * 60;


    function calculateTime(){
        const countdown = document.querySelector('#countdown');
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60; 

        if (seconds <10) {
            seconds = "0" + seconds;
        }

        countdown.textContent = `${minutes} : ${seconds}`;
        amountTime --;

        if (amountTime <0) {
            stopTimer();
            amountTime=0;
            startButton.removeAttribute("disabled", "disabled");
            startButton.textContent = 'Start again';
            video.pause();
            audio.pause();
        }
    }

    function stopTimer(){
        clearInterval(timerID);
    }

    let timerID = setInterval(calculateTime, 1000);

}