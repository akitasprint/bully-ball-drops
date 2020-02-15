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
    gameOverHit()
    {
        this.ball.classList.add('game-over-hit');
        endOfGame();
    }
}

/* Update score points with CSS animation */
const updateScore = (pointsToScore) => {
    const element = document.querySelector('.game-play-score > h1');
    Game.points += pointsToScore;
    element.textContent = Game.points;

    let newClass = null;
    switch (pointsToScore) {
        //case 1 : newClass = 'animate-score-1-point'; break;
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
    Game.extraTime += timeToScore;

    let newClass = null;
    switch (timeToScore) {
        case 5 : 
            newClass = 'animate-score-5-sec'; 
            Game.extraTimeNo++;
            Game.score_1_PointMoments = [...Game.score_1_PointMoments, ...generateExtra_5_secondsChop(GameSettings.score_1_PointNo_5_secondsChop)];
            Game.score_5_PointsMoments = [...Game.score_5_PointsMoments, ...generateExtra_5_secondsChop(GameSettings.score_5_PointsNo_5_secondsChop)];
            Game.loss_5_PointsMoments = [...Game.loss_5_PointsMoments, ...generateExtra_5_secondsChop(GameSettings.loss_5_PointsNo_5_secondsChop)];
            Game.score_5_SecondsMoments = [...Game.score_5_SecondsMoments, ...generateExtra_5_secondsChop(GameSettings.score_5_SecondsNo_5_secondsChop)];
            Game.loss_5_SecondsMoments = [...Game.loss_5_SecondsMoments, ...generateExtra_5_secondsChop(GameSettings.loss_5_SecondsNo_5_secondsChop)];
            if(Game.isGameOverBallCreated) {
                Game.gameOverMoment = generateExtra_5_secondsChop(1);
                Game.isGameOverBallCreated = false;
            }
            break;
        case -5 : newClass = 'animate-loss-5-sec'; break;
    }

    element.classList.add(newClass);
    element.addEventListener('animationend', ()=>{
        element.classList.remove(newClass);
    });  
}

/* Update CSS time bar width */
const updateTimeBarWidth = () => {
    /* Calculate using proportion: 
        Game.initGameTime - availWidth
                timeInSec - x
        x = ( timeInSec * availWidth ) / GameSettings.initGameTime;
    */
    const
            availWidth = getScreenWidth(),
            timeInSec = Game.time,
            widthCalculation = Math.round ( (timeInSec * availWidth) / GameSettings.initGameTime ),
            element = document.querySelector('.time-bar');
    
    if (widthCalculation > availWidth) Game.timeBarWidth = availWidth;
    else Game.timeBarWidth = widthCalculation;
    element.style.width = Game.timeBarWidth;
}

/* Generate extra 5 seconds chop */
const generateExtra_5_secondsChop = (n) =>
{
    let array = new Array();
    const extraTimeInSec = GameSettings.extraChopTime; // in seconds.

    // Generate n Time moments in each quarter.
    for(let j=0; j<n; j++)
    {
        // Generate random number: 
        const 
                totalTail = (GameSettings.initGameTime + extraTimeInSec * Game.extraTimeNo) * 1000,
                randomTimeMoment = Math.floor(Math.random() * extraTimeInSec * 1000) + totalTail - extraTimeInSec*1000;
        // Add a record to an array.
        array.push(randomTimeMoment);
    }
    // Return sorted out ASC array.
    return array.sort(function(a, b){return a-b});
}

/* Generate time moments in each chop */
const generateTimeMomentsInEachChop = (n) => {
    const q = GameSettings.chopTime * 1000; // switch seconds to ms.
    let
        array = new Array(),
        k = 0;

    // Repeat chopNo times.
    for(let i=0; i<GameSettings.chopNo; i++)
    {
        // Generate n Time moments in each chop.
        for(let j=0; j<n; j++)
        {
            // Generate random number in range: [k; q+k].
            const randomTimeMoment = Math.floor(Math.random() * q) + k;
            array.push(randomTimeMoment);
        }
        // Switch to another chop;
        k = k + q;
    }

    // Return sorted out ASC array.
    return array.sort(function(a, b){return a-b});
}

/* 
Generate game over moment:

[ Chop ][ Chop ] ... [ Chop ][Chop]
        |<----------------->|
           somewhere here
*/
const generateGameOverMoment = () => Math.floor(Math.random() * (GameSettings.initGameTime-GameSettings.chopTime)*1000) + GameSettings.chopTime*1000;

/* Game settings */
let GameSettings = {

    /* Time parameters */
    initGameTime:60, // in seconds.
    chopTime: 15, // in seconds.
    chopNo: 4,
    extraChopTime: 5, // in seconds.

    /* Points and time possible to get in each 15s time chop*/
    score_1_PointNo: 48,
    score_5_PointsNo: 6,
    loss_5_PointsNo: 6,
    score_5_SecondsNo: 1,
    loss_5_SecondsNo: 1,

    /* Points and time possible to get in extra 5s time chop */
    score_1_PointNo_5_secondsChop: 16,
    score_5_PointsNo_5_secondsChop: 2,
    loss_5_PointsNo_5_secondsChop: 2,
    score_5_SecondsNo_5_secondsChop: 1,
    loss_5_SecondsNo_5_secondsChop: 1,
}

/* Game object with global parameters */
let Game = {
    points:0,
    time:GameSettings.initGameTime,
    extraTime:0,
    extraTimeNo:0,
    timeBarWidth:null,
    ballsArray: undefined,
    score_1_PointMoments: undefined,
    score_5_PointsMoments: undefined,
    loss_5_PointsMoments: undefined,
    score_5_SecondsMoments: undefined,
    loss_5_SecondsMoments: undefined,
    gameOverMoment: undefined,
    isGameOverBallCreated: null,
    allowToScore: true,
    animationID:undefined,
    isGameOver:null,
    timeGameStarted:null,
    counterTimeForLoop:null,
}

// Create ball in defined moment.
const createBall = (momentsArr, diff, type) => {
    momentsArr.forEach((item, index, object)=>{
        if(diff >= item) {
            let newBall = null;
            switch (type)
            {
                case '+1p' : newBall = new Score_1_Point(); break;
                case '+5p' : newBall = new Score_5_Points(); break;
                case '-5p' : newBall = new Loss_5_Points(); break;
                case '+5s' : newBall = new Score_5_Seconds(); break;
                case '-5s' : newBall = new Loss_5_Seconds(); break;
            }
            Game.ballsArray.push(newBall);
            object.splice(index, 1);
        }
    }); 
}

/* After touch */
const hitEvent = e => {
    const 
        eClass = e.target.className,
        uid = e.target.id;

    if (eClass.includes('game-play-ball') && Game.allowToScore)
    {
        Game.ballsArray.forEach((ball, index, object) => {
            if(uid === ball.uniqueId){

                if (eClass.includes('loss-5-sec') || eClass.includes('score-5-sec') ) {
                    updateTime(ball.timeToGet);
                    ball.ballsEyeHit();
                    if(eClass.includes('loss-5-sec')) window.navigator.vibrate(300);
                    else window.navigator.vibrate([50,10,50,10,50]);
                }
                else if (eClass.includes('loss-5-points') || eClass.includes('score-5-points') ) {
                    updateScore(ball.scoreToGet);
                    ball.ballsEyeHit();
                    window.navigator.vibrate([100,30,100]);
                    if(eClass.includes('loss-5-points')) window.navigator.vibrate(300);
                    else window.navigator.vibrate([50,10,50,10,50]);
                }
                else if ( eClass.includes('score-1-point') ) {
                    updateScore(ball.scoreToGet);
                    ball.ballsEyeHit();
                    window.navigator.vibrate(70);
                }
                else if (eClass.includes('game-over')) {
                    ball.gameOverHit();
                };

                object.splice(index, 1);
            }
        });
    }
}

/* If GameOver or run out of time. */
const endOfGame = () => {
    /* Stop latest request animation frame*/
    Game.animationID = window.cancelAnimationFrame(Game.animationID);

    /* Define variables */
    const ballTransitionElement = document.querySelector('.ball-transition');

    /* Prohibit scoring */
    Game.allowToScore = false;

    /* Set Game property */
    Game.isGameOver = true;

    /* Remove unused event listeners */
    removeEventListeners();

    /* Remember the score */
    localStorage.setItem('lastScore', Game.points);

    /* Start transition animation */
    ballTransitionElement.classList.add('start-transition');

    /* After animation */
    ballTransitionElement.addEventListener('animationend', ()=>{
        ballTransitionElement.classList.remove('start-transition');
        document.body.innerHTML = "";
        showMainPage();
    });
}

/* Main Game Loop */
const mainLoop = (timeStamp) => {
    if(!Game.isGameOver && Game.time>0){

        // Define time variables.
        if(!Game.timeGameStarted) Game.timeGameStarted = (new Date()).getTime();
        if(!Game.counterTimeForLoop) Game.counterTimeForLoop = (new Date()).getTime();
        let diff = (new Date()).getTime() - Game.timeGameStarted,
            refresher = (new Date()).getTime() - Game.counterTimeForLoop;

        // Update game time bar.
        Game.time = ( GameSettings.initGameTime - (diff / 1000) ) + Game.extraTime;
        updateTimeBarWidth();

        // Update ball life time
        if(refresher >= 250) {
            Game.ballsArray.forEach((ball, index, object) => {
                ball.lifeTime = ball.lifeTime - 250;
            });
            // Reset time counter.
            Game.counterTimeForLoop = null;
        }      

        // Check the lifetime
        Game.ballsArray.forEach((ball, index, object) => {
            if(ball.lifeTime<=0){
                ball.missedHit();
                object.splice(index, 1);
            }
        })

        // Create score and loss balls in defined moments.
        createBall(Game.score_1_PointMoments, diff, '+1p');
        createBall(Game.score_5_PointsMoments, diff, '+5p');
        createBall(Game.loss_5_PointsMoments, diff, '-5p');
        createBall(Game.score_5_SecondsMoments, diff, '+5s');
        createBall(Game.loss_5_SecondsMoments, diff, '-5s');

        // Create game over balls in defined moment.
        if (diff >= Game.gameOverMoment && !Game.isGameOverBallCreated) {
            Game.isGameOverBallCreated = true;
            Game.ballsArray.push(new GameOver());
        }

        /* If run out of time */
        if (Game.time<=0) endOfGame();

        /* Else refresh */
        else Game.animationID = window.requestAnimationFrame(mainLoop);                   
    }
}

/* Set events listeners */
const setEventListeners = () => {
    /* Detect mobile rotation */
    window.addEventListener("orientationchange", updateTimeBarWidth);

    /* Detect resizing */
    window.addEventListener('resize', updateTimeBarWidth);

    // Listen to the body and check if ball got hit.
    document.body.addEventListener('touchstart', hitEvent);
}

/* Remove events listeners */
const removeEventListeners = () => {
    /* Detect mobile rotation */
    window.removeEventListener("orientationchange", updateTimeBarWidth);

    /* Detect resizing */
    window.removeEventListener('resize', updateTimeBarWidth);

    // Listen to the body and check if ball got hit.
    document.body.removeEventListener('touchstart', hitEvent);
}

/* Restart game parameters */
const restartGameParameters = () => {
    Game.points = 0;
    Game.time = GameSettings.initGameTime;
    Game.extraTime = 0;
    Game.extraTimeNo = 0;
    Game.timeBarWidth = null;
    Game.ballsArray = new Array ();
    Game.score_1_PointMoments = [...generateTimeMomentsInEachChop(GameSettings.score_1_PointNo)];
    Game.score_5_PointsMoments = [...generateTimeMomentsInEachChop(GameSettings.score_5_PointsNo)];
    Game.loss_5_PointsMoments = [...generateTimeMomentsInEachChop(GameSettings.loss_5_PointsNo)];
    Game.score_5_SecondsMoments = [...generateTimeMomentsInEachChop(GameSettings.score_5_SecondsNo)];
    Game.loss_5_SecondsMoments = [...generateTimeMomentsInEachChop(GameSettings.loss_5_SecondsNo)];
    Game.gameOverMoment = generateGameOverMoment();
    Game.isGameOverBallCreated = null;
    Game.allowToScore = true;
    Game.animationID = undefined;
    Game.isGameOver = null;
    Game.timeGameStarted = null;
    Game.counterTimeForLoop = null;
}

/* Start the game */
const startTheGame = () => {

    /* Define variables */
    const ballTransitionElement = document.querySelector('.ball-transition');

    /* Remove event listener for animation */
    ballTransitionElement.removeEventListener('animationend', startTheGame);
    
    /* Remove transition animation class */
    ballTransitionElement.classList.remove('end-transition');

    /* Set event listeners */
    setEventListeners();

    /* New game */
    restartGameParameters();

    /* Main loop */
    Game.animationID = window.requestAnimationFrame(mainLoop);  
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
        ballTransitionElement.addEventListener('animationend', startTheGame); 
    };
    xhr.send();
}