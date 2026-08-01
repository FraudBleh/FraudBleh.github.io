const particles=document.querySelector(".particles");

for(let i=0;i<80;i++){

const dot=document.createElement("span");

dot.style.left=Math.random()*100+"%";

dot.style.animationDuration=
5+Math.random()*10+"s";

dot.style.animationDelay=
Math.random()*8+"s";

dot.style.opacity=Math.random();

dot.style.width=
dot.style.height=
Math.random()*4+2+"px";

particles.appendChild(dot);

}
