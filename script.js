var score=0;
var hitrn=0;
var time=60;
function bubble(){
 var chal="";
for (let i = 1; i <=96; i++) {
   var a= Math.floor(Math.random()*10)
   chal += `<div class="bubble">${a}</div>`
}
document.querySelector(".pbottom").innerHTML=chal;
}
bubble();


function timer() {
   
   var timeInt=setInterval(() => {
      if (time>0) {
         time--
         document.querySelector("#timer").textContent=time;
      }else{
         clearInterval(timeInt)
         document.querySelector(".pbottom").innerHTML=`<h3>Game Over</h3>`
      }
   }, 1000);
}
timer()

function hit() {
   hitrn=Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent=hitrn
}
hit();
// Increse Score
function scores() {
   
   score+=10;
   document.querySelector("#scori").textContent=score;
}

//Event Bubbling
document.querySelector(".pbottom")
.addEventListener("click",function(dets) {
   var clicknum=Number(dets.target.textContent);
   if(clicknum == hitrn) {
      scores();
      bubble();
      hit();
      
    }
    else
    {
      score-=10;
      document.querySelector("#scori").textContent=score;
      
    }
})