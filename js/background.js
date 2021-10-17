const imgs = ["1.jpeg", "2.jpeg"];
const img = imgs[Math.floor(Math.random() * imgs.length)];
//지금까지는 html tag 생성 -> js로 html 다룸이었는데, 이번엔 js에서 tag 생성하여 html에 넣음
// const bgImage = document.createElement("img");
// bgImage.src = `img/${img}`
// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${img})`;