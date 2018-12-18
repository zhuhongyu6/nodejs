#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;
/*名字大写：构造函数*/
function Dog(name,energy){
  var _name=name;
  var _energy=energy;

  EventEmitter.call(this);

  var timer=global.setInterval(()=>{
    emit('bark');
  },500);
}

Dog.prototype=EventEmitter.prototype;

module.exports=Dog;
