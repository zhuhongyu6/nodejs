#!/usr/bin/node

function Bomb(){
  this.message='Bomb!';
}

Bomb.prototype.explode=function(){
  console.log(this);
  console.log(this.message);
}

var b=new Bomb();
//通过bind方法确保方法绑定到正确的对象上。绑定确保该方法内部的代码可以访问对象的内部属性。否则，setTimeout会导致this绑定到全局对象上运行。
setTimeout(b.explode.bind(b),2000);
