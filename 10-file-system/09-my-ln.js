#!/usr/bin/node
//创建硬链接
const fs=require('fs');

var src=process.argv[2],
    lnk=process.argv[3];

fs.linkSync(src,lnk);

