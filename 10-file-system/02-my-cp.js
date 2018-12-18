#!/usr/bin/node
/*实现文件复制*/

const fs=require('fs');

var src=process.argv[2],
    dst=process.argv[3];

//只复制了文件内容，没复制权限
fs.writeFileSync(dst,fs.readFileSync(src));

