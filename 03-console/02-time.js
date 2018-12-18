#!/usr/bin/node


//每次运行耗时不同，console.time开始计时，console.timeEnd结束计时
console.time('TEST');
longTask();
console.timeEnd('TEST');

function longTask(){
  var n;
  for(var i=0;i<10000;i++){
    for(var j=0;j<10000;j++){
      n=i*j;
    }
  }
  return n;
}
