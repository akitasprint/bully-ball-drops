import { showMainPage } from './main-page.js';

export const showManualScreen = () => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/html-pages/manual-page.html', true);
    xhr.onreadystatechange = function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        if (this.readyState==3);
    
        /* Insert loaded content */
        document.body.innerHTML = "";
        document.body.innerHTML= this.responseText;

        /* Define variables */
        const goBackBtn = document.querySelector('.go-back');
        const ballTransitionElement = document.querySelector('.ball-transition');

        /* Start transition animation */
        ballTransitionElement.classList.add('end-transition');        

        /* After animation */
        ballTransitionElement.addEventListener('animationend', () => {
            /* Remove transition animation class */
            ballTransitionElement.classList.remove('end-transition');
            ballTransitionElement.style.display = 'none';

            /* Click go-back button */
            goBackBtn.addEventListener('click', () => {
                window.navigator.vibrate(30);
                /* Start transition animation */
                ballTransitionElement.classList.add('start-transition');
                ballTransitionElement.style.display = 'block';

                /* After animation */
                ballTransitionElement.addEventListener('animationend', ()=>{
                    ballTransitionElement.classList.remove('start-transition');
                    document.body.innerHTML = "";
                    showMainPage();
                });
                
            });           
        });
        
    };
    xhr.send();
}