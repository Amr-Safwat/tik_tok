let videos = document.querySelectorAll('video');

for(let video of videos) {
  video.addEventListener('click',()=>{
    if(video.paused) {
      video.play();
    }else {
      video.pause();
    }
  })
}

if(window.scrollY > 0) {
  window.scrollY(200);
}
