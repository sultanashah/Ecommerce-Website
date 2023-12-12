let isStop = true;
let sec = 0;
let min = 0;
let hour = 0;
// let timer;

function start() 
{
  console.log("starting");

  if (isStop == true) {
    isStop = false;
    timer();
  }
}

function timer() {
  console.log("Timmer");
  if (isStop == false) {
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      }
      if (min == 60) {
        min = 0;
        hour++;
        }
      if(sec<10)

  //  timer.innerHTML =sec;
   stopwatch.innerHTML = hour +":" + min + ":"+sec;
    setTimeout("timer()", 1000);
  }
}
function stop() {
  isStop = true;
}

function Resert() {}
