#!/usr/bin/node
//查看文件详细信息
const fs=require('fs');

var file=process.argv[2];
    
console.log(fs.statSync(file));

