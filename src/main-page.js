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
        const ballTransitionElement = document.querySelector('.ball-transition');

        /* Animate score from 0 to Best Score after page load with n ms delay */
        // setTimeout(()=>{
        //     animateMainPageCounter(prepareScore());
        // },500);     
        animateMainPageCounter(prepareScore());

        /* Start transition animation */
        ballTransitionElement.classList.add('end-transition');

        /* After animation */
        ballTransitionElement.addEventListener('animationend', afterMainTransitionAnimation);
    };
    xhr.send();

}
showMainPage();

function afterMainTransitionAnimation() {
    /* Define variables */
    const 
        fullScreenBtn = document.querySelector('.full-screen'),
        manualScreenBtn = document.querySelector('.info'),
        gamePlayScreenBtn = document.querySelector('.play'),
        ballTransitionElement = document.querySelector('.ball-transition');

    /* Remove transition animation class */
    this.classList.remove('end-transition');
    this.style.display = 'none';

    /* Remove event listener */
    this.removeEventListener('animationend', afterMainTransitionAnimation);
    
    /* Toggle full screen on click event */
    fullScreenBtn.addEventListener('click', toggleFullScreen);

    /* Click information button */
    manualScreenBtn.addEventListener('click', () => {
        window.navigator.vibrate(30);
        /* Start transition animation */
        ballTransitionElement.classList.add('start-transition');
        ballTransitionElement.style.display = 'block';

        /* After animation */
        ballTransitionElement.addEventListener('animationend', goToManualPage);        
    });

    /* Click information button */
    gamePlayScreenBtn.addEventListener('click', () => {
        window.navigator.vibrate(30);
        /* Start transition animation */
        ballTransitionElement.classList.add('start-transition');
        ballTransitionElement.style.display = 'block';

        /* After animation */
        ballTransitionElement.addEventListener('animationend', goToGamePlayPage);
        
    });

}

function goToManualPage (){
    /* Remove transition animation class */
    this.classList.remove('start-transition');

    /* Remove event listener */
    this.removeEventListener('animationend', goToManualPage);

    document.body.innerHTML = "";
    showManualScreen();
}

function goToGamePlayPage (){
    /* Remove transition animation class */
    this.classList.remove('start-transition');

    /* Remove event listener */
    this.removeEventListener('animationend', goToGamePlayPage);

    document.body.innerHTML = "";
    showGamePlayScreen();
}

function prepareScore () {
    /* Define variables */
    const
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

    return { state:state, score:animateFirst };     
}