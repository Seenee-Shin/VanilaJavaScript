const background = [
  "bg0.jpg",
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.jpg"
]

//배열길이의 랜덤숫자 만들기 

//랜덤 배경화면 구하기
const choosenBg = background[Math.floor(Math.random()* background.length)];

console.log(choosenBg);

//document.body.style.backgroundImage =`url('img/${choosenBg}')`;

const bgImage = document.createElement("img");
bgImage.src = `img/${choosenBg}`;

document.body.appendChild(bgImage)



