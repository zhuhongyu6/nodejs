#!/usr/bin/node
//修改文件权限
const fs=require('fs');

var file=process.argv[2],
    mode=process.argv[3];

fs.chmodSync(file,mode);

