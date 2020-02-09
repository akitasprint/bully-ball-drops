fullScreenBtn = document.querySelector('.full-screen');

fullScreenBtn.addEventListener('click', function(){
    toggleFullScreen();
});

toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }