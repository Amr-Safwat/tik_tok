let videos = document.querySelectorAll('video');
let icon = document.querySelectorAll('.icon');
let likes = document.getElementsByClassName('like');
let commentsI = document.getElementsByClassName('comment');
let pAll = document.querySelectorAll('.like + p');
let pCom = document.querySelectorAll('.comment + p');
let comments = document.querySelectorAll('.comments');
let commentsList = document.querySelectorAll('.comments-list');
let addCom = document.querySelectorAll('.comments button');
let input = document.querySelectorAll('.comments input');
let spans = document.querySelectorAll('.comments > h3 span');

for (let video of videos) {
	video.addEventListener('click', () => {
		if (video.paused) {
			video.play();
			icon[0].style.display = 'flex';
			setTimeout(() => {
				icon[0].style.display = 'none';
			}, 600);
		} else {
			video.pause();
			icon[1].style.display = 'flex';
			setTimeout(() => {
				icon[1].style.display = 'none';
			}, 600);
		}
	});
}

for (let i = 0; i < likes.length; i++) {
	likes[i].onclick = () => {
		if (pAll[i].innerHTML !== '1') {
			icon[2].style.display = 'flex';
			likes[i].style.color = 'red';
			setTimeout(() => {
				icon[2].style.display = 'none';
			}, 800);
			pAll[i].innerHTML++;
		} else {
			likes[i].style.color = 'white';
			pAll[i].innerHTML--;
		}
	};
}
let msgTime = new Date();

for (let i = 0; i < commentsI.length; i++) {
	commentsI[i].onclick = () => {
		comments[i].style.bottom = '0';
	};
	videos[i].onclick = () => {
		comments[i].style.bottom = '-60%';
	};
}
for (let i = 0; i < commentsI.length; i++) {
	commentsI[i].onclick = () => {
		comments[i].style.bottom = '0';
	};
	videos[i].onclick = () => {
		comments[i].style.bottom = '-60%';
	};
}
for (let i = 0; i < addCom.length; i++) {
	addCom[i].onclick = () => {
		let li = document.createElement('li');
		let img = document.createElement('img');
		let div = document.createElement('div');
		let h4 = document.createElement('h4');
		let p = document.createElement('p');
		let span = document.createElement('span');
		let text = document.createTextNode(input[i].value);
		div.className = 'info';
		h4.innerText = 'Amr Safwat';
		img.src = 'icons/Amr.png';
		span.innerText = `${msgTime.getDate()}/${msgTime.getMonth()}/${msgTime.getFullYear()}`;
		p.append(text);
		commentsList[i].appendChild(li);
		div.appendChild(h4);
		div.appendChild(p);
		li.appendChild(img);
		li.appendChild(div);
		li.appendChild(span);
		pCom[i].innerText++;
		spans[i].innerText++;
		input[i].value = '';
	};
}

// console.log(pCom[3]);
