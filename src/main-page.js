import { animateMainPageCounter } from './score-animation-feature';
import { toggleFullScreen } from './full-screen-feature';
import { showManualScreen } from './manual-page';
import { showGamePlayScreen } from './game-play-page';

export const showMainPage = () => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/html-pages/main-page.html', true);
    xhr.onreadystatechange = function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        if (this.readyState==3);

        /* Insert loaded content */
        document.body.innerHTML = "";
        document.body.innerHTML= this.responseText;

        /* Define variables */
        const 
                ballTransitionElement = document.querySelector('.ball-transition'),
                scoreTitle = document.querySelector('.main-page-score > h1'),
                medalIcon = document.querySelector('.medal-icon');

        let animateFirst, lastScore=0, bestScore=0, state;

        /* Check local storage last score and best score */
        if(!localStorage.getItem('bestScore')) {
            // Best score does not exist in local storage
            localStorage.setItem('bestScore', bestScore);
            state = 'first-time-here';
            scoreTitle.textContent = 'Best score:';
            animateFirst = bestScore;

        } else {
            // Best score exists in local storage
            bestScore = parseInt(localStorage.getItem('bestScore'));
            state = 'was-here-before';
            scoreTitle.textContent = 'Best score:';
            animateFirst = bestScore;

            if(localStorage.getItem('lastScore')) {
                // Last score exists in local storage. End of play.
                lastScore = parseInt(localStorage.getItem('lastScore'));
                medalIcon.style.visibility = 'hidden';
                scoreTitle.textContent = 'Your score:';
                animateFirst = lastScore;

                if (lastScore>bestScore) {
                    localStorage.setItem('bestScore', lastScore);
                    state = 'new-best-score';
                } else {
                    state = 'keep-best-score';
                }

                localStorage.removeItem('lastScore');
            }
        }

        /* Animate score from 0 to Best Score after page load with n ms delay */
        setTimeout(()=>{
            animateMainPageCounter(animateFirst, state);
        },500);     

        /* Start transition animation */
        ballTransitionElement.classList.add('end-transition');

        /* After animation */
        ballTransitionElement.addEventListener('animationend', afterTransitionAnimation);
    };
    xhr.send();

}
showMainPage();

function afterTransitionAnimation() {
    /* Define variables */
    const 
        fullScreenBtn = document.querySelector('.full-screen'),
        manualScreenBtn = document.querySelector('.info'),
        gamePlayScreenBtn = document.querySelector('.play'),
        ballTransitionElement = document.querySelector('.ball-transition');

    /* Remove transition animation class */
    ballTransitionElement.classList.remove('end-transition');

    /* Toggle full screen on click event */
    fullScreenBtn.addEventListener('click', toggleFullScreen);

    /* Click information button */
    manualScreenBtn.addEventListener('click', () => {

        /* Start transition animation */
        ballTransitionElement.classList.add('start-transition');

        /* After animation */
        ballTransitionElement.addEventListener('animationend', ()=>{
            /* Remove transition animation class */
            ballTransitionElement.classList.remove('start-transition');

            document.body.innerHTML = "";
            showManualScreen();
        });
        
    });

    /* Click information button */
    gamePlayScreenBtn.addEventListener('click', () => {

        /* Start transition animation */
        ballTransitionElement.classList.add('start-transition');

        /* After animation */
        ballTransitionElement.addEventListener('animationend', ()=>{
            /* Remove transition animation class */
            ballTransitionElement.classList.remove('start-transition');

            document.body.innerHTML = "";
            showGamePlayScreen();
        });
        
    });

}