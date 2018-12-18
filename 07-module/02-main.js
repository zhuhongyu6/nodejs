#!/usr/bin/node
/*require引入模块*/


/*引入变量,注意引入脚本时不加js
var pi=require('./02-export-var');
console.log('\npi:',pi);
console.log();
console.dir(module);
*/

/*引入函数，注意引入脚本时不加js
var circle=require('./02-export-function');
console.log(circle(20).diameter());
console.log(circle(20).circumference());
console.log(circle(20).area());
*/

/*引入对象*/
var circle=require('./02-export-object');
console.log(circle.diameter(20));
console.log(circle.circumference(20));
console.log(circle.area(20));

