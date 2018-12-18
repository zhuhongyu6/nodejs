#!/usr/bin/node
//读符号链接指向的文件是什么
const fs=require('fs');

var lnk=process.argv[2];

console.log(fs.readlinkSync(lnk));

