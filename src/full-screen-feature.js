/* Toggle full screen on click event */
export const toggleFullScreen = () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else if (document.exitFullscreen) document.exitFullscreen(); 
  window.navigator.vibrate(30);
}