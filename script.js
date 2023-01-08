
const bg = document.querySelector('.background');

// point
const point = document.getElementById('point');
let score = 0;

function hit() {
  score++;
  point.textContent = score;
}

let gamePlay = setInterval(function () {
  let spawn = document.createElement('div');
  let rPos = Math.round(Math.random() * 280);
  let style = spawn.setAttribute('class', 'spawn');
  spawn.style.left = rPos + 'px';

  spawn.addEventListener('click', function () {
    hit();
    spawn.remove();
  });

  bg.appendChild(spawn);

  setTimeout(function () {
    spawn.remove();
  }, 10000);

}, 1000);
