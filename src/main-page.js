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
        const fullScreenBtn = document.querySelector('.full-screen');
        const manualScreenBtn = document.querySelector('.info');
        const gamePlayScreenBtn = document.querySelector('.play');
        const ballTransitionElement = document.querySelector('.ball-transition');
        
        /* Animate score from 0 to Best Score after page load with 300ms delay */
        setTimeout(()=>{
            animateMainPageCounter(300)
        },500);

        /* Start transition animation */
        ballTransitionElement.classList.add('end-transition');

        /* After animation */
        ballTransitionElement.addEventListener('animationend', () => {
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

        });
    };
    xhr.send();

}
showMainPage();