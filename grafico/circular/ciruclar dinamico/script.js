let circularPorgress =document.querySelector(".circular-progress"),progressValue=document.querySelector(".progress-value");

let progressStartValue=0,
progressEndValue=100,
speed=100;
let progress =setInterval(()=>{
  progressStartValue++;

  progressValue.textContent=`${progressStartValue}%`;
  circularPorgress.style.background=`conic-gradient(rgb(255, 255, 255) ${progressStartValue * 3.6}deg ,rgb(71, 81, 223) 0deg)`;
  if(progressStartValue==progressEndValue){
    clearInterval(progress);
  }
  console.log(progressStartValue);
},speed);