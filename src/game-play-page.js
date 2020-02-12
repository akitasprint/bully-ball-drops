import { showMainPage } from './main-page.js';

/* Usefull functions */
const getScreenWidth = () => document.documentElement.clientWidth;
const getScreenHeight = () => document.documentElement.clientHeight;
const isPortraitOrientation = () => {
    if (getScreenHeight() > getScreenWidth()) return true
    else return false
}

/* Fundamental basic ball Class */
class BasicBall {
    constructor(cssBallClass){
        // Define ID and Score to get.
        this.uniqueId = `uid-${this.generateUniqueID()}`;
        this.scoreToGet = null;
        this.timeToGet = null;

        // Define ball diameter and hitbox margin in px.
        this.diameter = this.generateRandomDiameter();

        // Define ball position in px.
        this.x=this.generateRandomPosition().x;
        this.y=this.generateRandomPosition().y;

        // Define lifetime in ms.
        this.lifeTime=this.generateRandomLifeTime();

        // Define css color class
        this.cssBallClass = cssBallClass;

        // HTML init.
        this.initHTML( this.cssBallClass );

        // Define HTML elements.
        this.ball = document.getElementById(`${this.uniqueId}`);

        // Set up css styles.
        this.setUpCSS();
    }
    // Missed Hit
    missedHit()
    {
        this.ball.classList.add('missed-hit');
        this.ball.addEventListener('animationend', () => {
            this.ball.remove();
        });
    }
    // Ballseye Hit
    // *bullseye ofcourse :P
    ballsEyeHit()
    {
        this.ball.classList.add('ballseye-hit');
        this.ball.addEventListener('animationend', () => {
            this.ball.remove();
        });        
    }
    // * Create html:
    initHTML (CssBallClass) {
        const gamePlayBall = document.createElement('div');
        gamePlayBall.id = this.uniqueId;    
        gamePlayBall.classList.add('game-play-ball', CssBallClass);
        document.body.appendChild(gamePlayBall);
    }
    // * Set up styles.
    setUpCSS () {
        // Game Play Ball styles.
        this.ball.style.height=`${this.diameter}px`;
        this.ball.style.width=`${this.diameter}px`;
        this.ball.style.left = `${this.x}px`;
        this.ball.style.bottom = `${this.y}px`;
        this.ball.style.margin = -1*(this.diameter)/2;
    }
    // * Generate random life time in range: [2000ms;5000ms];
    generateRandomLifeTime (){
        return Math.floor(Math.random() * 3000) + 2000;
    }
    // * Generate random ID for new object.
    generateUniqueID () {
        return Math.random().toString(36).substr(2, 16);
    }
    // * Generate random position.
    generateRandomPosition(){
        const 
            canvasWidth = getScreenWidth() - this.diameter,
            canvasHeight = getScreenHeight() - this.diameter,
            x = Math.floor(Math.random() * canvasWidth + this.diameter/2 ),
            y = Math.floor(Math.random() * canvasHeight + this.diameter/2 );

        return {x,y};
    }
    /* 
    *Generate random diameter in range:
    [10vw; 20vw] for portrait orientation
    [10vh; 20vh] for landscape orientation
    */
    generateRandomDiameter(){
        let min = getScreenWidth()/10;
        if (!isPortraitOrientation) min = getScreenHeight()/10;
        return Math.floor(Math.random() * min + min );
    }
}

class Score_1_Point extends BasicBall {
    constructor (){
        super('score-1-point');
        this.scoreToGet = 1;
        this.lifeTime = 2000;
    }
}
class Score_5_Points extends BasicBall {
    constructor (){
        super('score-5-points');
        this.scoreToGet = 5;
        this.lifeTime = 1000;
    }
}
class Loss_5_Points extends BasicBall {
    constructor (){
        super('loss-5-points');
        this.scoreToGet = -5;
        this.lifeTime = 3000;
    }
}
class Score_5_Seconds extends BasicBall {
    constructor (){
        super('score-5-sec');
        this.timeToGet = 5;
        this.lifeTime = 1000;
    }
}
class Loss_5_Seconds extends BasicBall {
    constructor (){
        super('loss-5-sec');
        this.timeToGet = -5;
        this.lifeTime = 3000;
    }
}
class GameOver extends BasicBall {
    constructor (){
        super('game-over');
        this.lifeTime = 5000;
    }
}

let Game = {
    points:0,
    time:60,
    initGameTime:60,
    timeBarWidth:null,
}

/* Update score points with CSS animation */
const updateScore = (pointsToScore) => {
    const element = document.querySelector('.game-play-score > h1');
    Game.points += pointsToScore;
    element.textContent = Game.points;

    let newClass = null;
    switch (pointsToScore) {
        case 1 : newClass = 'animate-score-1-point'; break;
        case 5 : newClass = 'animate-score-5-points'; break;
        case -5 : newClass = 'animate-loss-5-points'; break;
    }

    element.classList.add(newClass);
    element.addEventListener('animationend', ()=>{
        element.classList.remove(newClass);
    });
}

/* Update score time with CSS animation */
const updateTime = (timeToScore) => {
    const element = document.querySelector('.time-bar');
    Game.time += timeToScore;

    let newClass = null;
    switch (timeToScore) {
        case 5 : newClass = 'animate-score-5-sec'; break;
        case -5 : newClass = 'animate-loss-5-sec'; break;
    }

    updateTimeBarWidth (Game.time, getScreenWidth());
    element.classList.add(newClass);
    element.addEventListener('animationend', ()=>{
        element.classList.remove(newClass);
    });    
}

const updateTimeBarWidth = (timeInSec, availWidth) => {
    /* Calculate using proportion: 
        Game.initGameTime - getScreenWidth
                timeInSec - x
        x = ( timeInSec * availWidth ) / Game.initGameTime;
    */
    const 
            widthCalculation = Math.round ( (timeInSec * availWidth) / Game.initGameTime ),
            element = document.querySelector('.time-bar');
    
    if (widthCalculation > availWidth) Game.timeBarWidth = availWidth;
    else Game.timeBarWidth = widthCalculation;
    element.style.width = Game.timeBarWidth;
}

export const showGamePlayScreen = () => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/html-pages/game-play-page.html', true);
    xhr.onreadystatechange = function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        if (this.readyState==3);
    
        /* Insert loaded content */
        document.body.innerHTML = "";
        document.body.innerHTML= this.responseText;

        /* Define variables */
        const ballTransitionElement = document.querySelector('.ball-transition');
        // const gamePlayBall = document.querySelector('.game-play-ball');

        /* Start transition animation */
        ballTransitionElement.classList.add('end-transition');  

        /* After animation */
        ballTransitionElement.addEventListener('animationend', () => {

            /* Remove transition animation class */
            ballTransitionElement.classList.remove('end-transition');


            let ballsArray = new Array ();
            for (let w=0; w<5; w++)
            {
                const newBall = new Score_1_Point();
                ballsArray.push(newBall);
            }
            for (let w=0; w<5; w++)
            {
                const newBall = new Score_5_Points();
                ballsArray.push(newBall);
            }
            for (let w=0; w<5; w++)
            {
                const newBall = new Loss_5_Points();
                ballsArray.push(newBall);
            }
            for (let w=0; w<5; w++)
            {
                const newBall = new Loss_5_Seconds();
                ballsArray.push(newBall);
            }    
            for (let w=0; w<5; w++)
            {
                const newBall = new Score_5_Seconds();
                ballsArray.push(newBall);
            }  
            for (let w=0; w<2; w++)
            {
                const newBall = new GameOver();
                ballsArray.push(newBall);
            }             

            /* Detect mobile rotation */
            window.addEventListener("orientationchange", function() {
                updateTimeBarWidth(Game.time, screen.availWidth);
            });
            /* Detect resizing */
            window.addEventListener('resize', function() {
                updateTimeBarWidth(Game.time, screen.availWidth);
            });

            // Check if ball got hit.
            document.body.addEventListener('touchstart', (e)=>{
                const 
                        eClass = e.target.className,
                        uid = e.target.id;

                if (eClass.includes('game-play-ball'))
                {
                    ballsArray.forEach((ball, index, object) => {
                        if(uid === ball.uniqueId){
                            if (eClass.includes('loss-5-sec') || eClass.includes('score-5-sec') ) updateTime(ball.timeToGet);
                            else updateScore(ball.scoreToGet);
                            
                            if (eClass.includes('game-over')) console.log('game over dude!');
                            ball.ballsEyeHit();
                            object.splice(index, 1);
                        }
                    })
                }
            })        
            /* Click go-back button */
            // gamePlayBall.addEventListener('click', () => {

            //     /* Start transition animation */
            //     ballTransitionElement.classList.add('start-transition');

            //     /* After animation */
            //     ballTransitionElement.addEventListener('animationend', ()=>{
            //         ballTransitionElement.classList.remove('start-transition');
            //         document.body.innerHTML = "";
            //         showMainPage();
            //     });
                
            // });           
        });
        
    };
    xhr.send();
}