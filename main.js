let videos = document.querySelectorAll('video');
let icon = document.querySelectorAll('.icon');
let icons = document.getElementsByClassName('like');
let pAll = document.querySelectorAll('.like + p');

for(let video of videos) {
  video.addEventListener('click',()=>{
    if(video.paused) {
      video.play();
      icon[0].style.display = 'flex';
      setTimeout(()=> {
        icon[0].style.display = 'none';
      },600);
    }else {
      video.pause();
      icon[1].style.display = 'flex';
      setTimeout(()=> {
        icon[1].style.display = 'none';
      },600);
    }
  })
}

for(let i = 0;i< icons.length;i++) {
  icons[i].onclick = ()=>{
    pAll[i].innerHTML++;
  }
}


// console.log(pAll);