/* Define variables */
const leftPointsToSlowDown = 10;
let bestScore = -1; // fake number.
let element = 0;
let startTime = null;
let diff = 0;
let i = 0;
let reqID = undefined;
let state = undefined;
let gugu = true;
/* Call animation counter*/
export const animateMainPageCounter = (obj) => {
  bestScore = obj.score;
  state = obj.state;
  element = 0;
  startTime = null;
  diff = 0;
  i = 0;
  element = document.querySelector('.main-page-score__quantity');
  reqID = window.requestAnimationFrame(increaseMainPageCounter);
}

/* Calculate linear slow down for animation counter */
const calculateSlope = (animatedScoreValue) => {
  /*

    kOut [ms] 
    ᴧ        .     .
    |        ⁞     ⁞
    |........⁞.....⁞......... slowestPoint
    |        ⁞    /⁞
    |        ⁞   / ⁞
    |        ⁞  /  ⁞
    |        ⁞ /   ⁞
    |________⁞/....⁞......... fastestPoint
    |        ⁞     ⁞ 
    '--------+-----+--------> animatedScoreValue
    0        iF    iT

  */

  /* Define variables */
  const slowestPoint = 500; // ms
  const fastestPoint = 1; // ms
  let   increaseFrom = bestScore - leftPointsToSlowDown;
  const increaseTo = bestScore;
  let kOut=0;

  /* Linear function y2 = a2*x +b2 parameters for gaining speed */
  const a = (fastestPoint - slowestPoint) / (increaseFrom - bestScore);
  const b = slowestPoint - (a * bestScore);

  /* Calculate */
  if (animatedScoreValue < increaseFrom) kOut = fastestPoint;
  else if (animatedScoreValue >= increaseFrom && animatedScoreValue <= increaseTo) kOut = a * animatedScoreValue + b;

  /* Return calculated value */
  return kOut;
}

/* Counter animation */
const increaseMainPageCounter = (currentTime) => {

  let k = 0;
  /* For first cycle set startTime to timestamp passed through requestAnimationFrame
  Keep it until (***) */
  if (!startTime) startTime = currentTime;

  // Calculate difference between callBack requestAnimationFrame output and last time.
  diff = currentTime - startTime;

  // Calculate slow down.
  k = calculateSlope(i);

  // (k) means how fast refresh the content, it depends on animated score value.
  if ( diff >= k && i < bestScore )
  {
    /* (***) Reset */
    diff = 0;
    startTime = null;

    /* For first 30 points increment i++ */
    if ( i < 30 ) {
      i++;
      window.navigator.vibrate(10);
    }

    /* After 30 points */
    else {
      if ( i < bestScore - leftPointsToSlowDown ) {
        /* (1) */
        let y = Math.round(( 0.05 * bestScore - 0.5 ));
        let hat = 50;
        if ( y > hat ) y = hat;

        /* (2) */
        if (( i + y ) > ( bestScore - leftPointsToSlowDown )) i = bestScore - leftPointsToSlowDown;
        else i = i + y;
        window.navigator.vibrate(5);
      }
      /* (3) */
      else if (i >= bestScore - leftPointsToSlowDown ) {
        i = i + 1;
        window.navigator.vibrate(50);
      }
    }
    /*
    (1)
      Animated score value (i) is between 30 and (bestScore - leftPointsToSlowDown)
      Increase points by adding y value which depends on bestScore.
      Maximum y value is 50.
      If user has 10000 points doesnt have to wait long.

      ᴧ y      .     . /
      |        ⁞     ⁞/
      |........⁞...../......... 50
      |        ⁞    /⁞
      |        ⁞   / ⁞
      |        ⁞  /  ⁞
      |        ⁞ /   ⁞
      |........⁞/....⁞......... 1
      |        /     ⁞ 
      '-------/⁞-----⁞--------> bestScore
      0        30    1000

    (2) 
      To prevent situation like this:
        bestScore = 8000;
        leftPointsToSlowDown = 30;
        y = 50;
        ...7980, 7930, ->7980<- ...
        ( 7980 + 30 = 8010 ) > bestScore

      just set: 
        i = bestScore - leftPointsToSlowDown

    (3) 
      This is slow down point, so just increase i++;
    */

    // Update content.
    element.textContent = i;
  }

  // Refresh
  reqID = window.requestAnimationFrame(increaseMainPageCounter);
 
  // TODO: add some comments and clean the mess.
  if( i >= bestScore ) {

    reqID = window.cancelAnimationFrame(reqID);
    if (state == 'new-best-score' || state == 'keep-best-score' ){
      
      const scoreTitle = document.querySelector('.main-page-score > h1');
      const medalIconDiv = document.querySelector('.medal-icon');
      const medalIcon = document.querySelectorAll('.medal-icon path');

      element.classList.add('fade-out');
      scoreTitle.classList.add('fade-out');
      medalIcon.forEach( item => {
        item.classList.add('fade-out');
      });    

      element.addEventListener('transitionend', ()=>{

        medalIconDiv.style.visibility = 'visible';
        element.classList.remove('fade-out');
        scoreTitle.classList.remove('fade-out');
        medalIcon.forEach( item => {
          item.classList.remove('fade-out');
        });

        if(state == 'new-best-score') {

          scoreTitle.textContent = 'New best score:';
          element.classList.add('fade-in');
          scoreTitle.classList.add('fade-in');
          medalIcon.forEach( item => {
            item.classList.add('fade-in');
          });
          element.classList.add('glory-text');
          scoreTitle.classList.add('glory-text');
          medalIcon.forEach( item => {
            item.classList.add('glory-icon');
          });
        }
        if(state == 'keep-best-score') {

          scoreTitle.textContent = 'Best score:';
          element.classList.add('fade-in');
          medalIcon.forEach( item => {
            item.classList.add('fade-in');
          });
          scoreTitle.classList.add('fade-in');

          animateMainPageCounter({score:localStorage.getItem('bestScore'), state:'stop'});
        }
      });
    }

  }
}