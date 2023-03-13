let videos = document.querySelectorAll('video');
let icon = document.querySelectorAll('.icon');
let likes = document.getElementsByClassName('like');
let comments = document.getElementsByClassName('comment');
let pAll = document.querySelectorAll('.like + p');
let commentsList = document.querySelectorAll('.comments');

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

for(let i = 0;i< comments.length;i++) {
  likes[i].onclick = ()=>{
    icon[2].style.display = 'flex';
    setTimeout(()=> {
      icon[2].style.display = 'none';
    },800);
    pAll[i].innerHTML++;
  }
}

for(let i = 0;i< comments.length;i++) {
  comments[i].onclick = ()=>{
    commentsList[i].style.bottom = '0';
  }
  videos[i].onclick = ()=>{
    commentsList[i].style.bottom = '-60%';
  }
}
// console.log(icon);