#!/usr/bin/node
//删除空目录：目录下无子目录
const fs=require('fs');

var dir=process.argv[2];

fs.rmdirSync(dir);

