let videos = document.querySelectorAll('video');
let icons = document.querySelectorAll('.icon');

for(let video of videos) {
  video.addEventListener('click',()=>{
    if(video.paused) {
      video.play();
      icons[0].style.display = 'flex';
      setTimeout(()=> {
        icons[0].style.display = 'none';
      },600);
    }else {
      video.pause();
      icons[1].style.display = 'flex';
      setTimeout(()=> {
        icons[1].style.display = 'none';
      },600);
    }
  })
}