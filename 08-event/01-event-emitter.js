#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;

var emitter=new EventEmitter();

emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('hello',()=>{
  console.log('HELLO EVENT');
});

/*emitter.listeners():返回名为hello的事件的监听数组的副本*/
//console.log(emitter.listeners('hello'));

emitter.on('bye',()=>{
  console.log('bye event');
  process.exit();
});

//调用hello函数
setInterval(()=>{
  emitter.emit('hello');
},500);

//调用bye函数
setTimeout(()=>{
  emitter.emit('bye');
},2000);

