#!/usr/bin/node

/*这种方式定义的n在模块上是共享的，对于主函数实例化的两个
 对象n1,n2共享n*/
var n=0;
function Num(){}


Num.prototype.add=()=>n++;
Num.prototype.getNum=()=>n;


module.exports=Num;


