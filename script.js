let timmer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}
function minusscore() {
  score -= 5;
  document.querySelector("#scoreval").innerHTML = score;
}

function getnewhint() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
  let clutter = "";

  for (let i = 0; i < 119; i++) {
    let number = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${number}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runtime() {
  setInterval(() => {
    if (timmer == 0) {
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<pre><h1 id="over">Game Over</h1><h2 id="finnal">Your Score : ${score}</h2></pre>`;
      return;
    }
    timmer--;
    document.querySelector("#time").textContent = timmer;
  }, 1000);
}
document.querySelector("#pbtm").addEventListener("click", (e) => {
  let clickednum = parseInt(e.target.textContent);
  if (clickednum == hitrn) {
    timmer=timmer+6
    increaseScore();
    getnewhint();
    makebubble();
  } else {
    timmer = timmer - 4;
  }
});
runtime();
makebubble();
getnewhint();
