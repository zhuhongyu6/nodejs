#!/usr/bin/node
//监听
const fs=require('fs');

fs.watch(__dirname,function(e,f){
  console.log(e,f);
});

