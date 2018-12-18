#!/usr/bin/node

function Bomb(){
  this.message='Bomb!';
}

Bomb.prototype.explode=function(){
  //这里的this指setTimeout而不是实例化出来的对象,所以后面用bind方法改变指向
  console.log(this);
  console.log(this.message);
}

var b=new Bomb();

setTimeout(b.explode.bind(b),2000);
