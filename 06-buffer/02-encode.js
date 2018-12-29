#!/usr/bin/node

const name=process.argv[2];
      pwd=process.argv[3];

var str =name+":"+pwd;
//console.log(str);
var buf=new Buffer(str);

console.log('user name and passwd:',buf.toString());
console.log('user name and passwd with base64:',buf.toString('base64'));
console.log('user name and passwd with hex:',buf.toString('hex'));


