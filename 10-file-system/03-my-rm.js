#!/usr/bin/node
//文件删除

const fs=require('fs');

var file=process.argv[2];

fs.unlinkSync(file);
    
