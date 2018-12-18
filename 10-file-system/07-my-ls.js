#!/usr/bin/node
//查看文件名称
const fs=require('fs');

var dir=process.argv[2];

console.log(fs.readdirSync(dir));

