#!/usr/bin/node

const EventEmitter=require('events').EventEmitter;
/*名字大写：构造函数*/
function Dog(name,energy){
  var _name=name;
  var _energy=energy;

  var self=this;
  EventEmitter.call(this);

  var timer=global.setInterval(()=>{
    if(energy>0){
      self.emit('bark');
      _energy--;
    }else{
      global.clearInterval(timer);
    }
  },500);

  this.name=()=>_name;
  this.energy=()=>_energy;
}

Dog._proto_=EventEmitter.prototype;

module.exports=Dog;
