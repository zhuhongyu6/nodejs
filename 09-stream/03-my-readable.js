#!/usr/bin/node

const Readable=require('stream').Readable,
      util=require('util');

var c=97;
var MyReaderble=function(){
  Readable.call(this);
};

MyReaderble.prototype._read=function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
};

util.inherits(MyReaderble,Readable);

var src=new MyReaderble();
src.pipe(process.stdout);
