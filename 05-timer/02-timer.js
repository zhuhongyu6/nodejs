#!/usr/bin/node

console.log('start...');

var count=0;
var timerID=setInterval(loop,500);

//通过次数控制
function loop(){
  console.log('I will loop forever');

 // if(++count===10) global.clearInterval(timerID);
}


//通过时间控制
global.setTimeout(()=>{
  global.clearInterval(timerID);
  console.log('end');
},3000)

