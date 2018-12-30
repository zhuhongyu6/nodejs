#!/usr/bin/node

var obj=require('./03-export-all.js');
console.log(obj.pi);
console.log(obj.circle(10).area());
console.log(obj.Circle.diameter(20));
