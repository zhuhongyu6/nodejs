#!/usr/bin/node

/*导出对象*/

module.exports={
  diameter:function(r){return 2*r;},
  circumference:function(r){return Math.PI*2*r;},
  area:function(r){return Math.PI*r*r;}
};
