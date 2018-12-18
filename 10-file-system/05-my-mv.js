#!/usr/bin/node
//重命名文件
const fs=require('fs');

var src=process.argv[2],
    dst=process.argv[3];

fs.renameSync(src,dst);


