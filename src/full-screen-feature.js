/* Toggle full screen on click event */

let fullScreenBtn = document.querySelector('.full-screen');

fullScreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else if (document.exitFullscreen) document.exitFullscreen(); 
});