// === Particules de sable ===
const canvas = document.getElementById("sable-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let particules = [];
for (let i = 0; i < 120; i++) {
  particules.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,215,0,0.2)";
  ctx.beginPath();
  for(let i=0;i<particules.length;i++){
    let p = particules[i];
    ctx.moveTo(p.x,p.y);
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
  }
  ctx.fill();
  update();
}

let angle = 0;
function update(){
  angle += 0.01;
  for(let i=0;i<particules.length;i++){
    let p = particules[i];
    p.y += Math.cos(angle+p.d) + 1 + p.r/2;
    p.x += Math.sin(angle) * 2;

    if(p.x > canvas.width + 5 || p.x < -5 || p.y > canvas.height){
      p.x = Math.random()*canvas.width;
      p.y = -10;
    }
  }
}

setInterval(draw, 30);

// === Footer retour animation ===
function returnToHome(elem){
  elem.classList.add("fade");
  setTimeout(()=>{ window.location.href = "DESTINATION PARTIEL2.html"; }, 800);
}
function goHomeDesertique(element) {
  // Ajoute la classe pour l'animation
  element.classList.add('fade');

  // Redirection après la fin de l'animation
  setTimeout(() => {
    window.location.href = "DESTINATION PARTIEL2.html"; // Page d'accueil
  }, 800); // 800ms = durée de l'animation
}
