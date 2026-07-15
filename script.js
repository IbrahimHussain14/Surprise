const n=document.getElementById('noBtn');
if(n){
function move(){
const w=window.innerWidth-120,h=window.innerHeight-80;
n.style.position='fixed';
n.style.left=Math.random()*w+'px';
n.style.top=Math.random()*h+'px';
}
['mouseover','touchstart','click'].forEach(e=>n.addEventListener(e,(ev)=>{if(e==='click'){location='no.html';}else{ev.preventDefault();move();}}));
}
