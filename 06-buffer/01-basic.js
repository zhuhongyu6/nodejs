#!/usr/bin/node

var buf1=new Buffer(256);
buf1[0]=23;

const log=console.log;
log('buffer length:',buf1.length);
log('\nbuffer content:',buf1);

for(var i=0;i<256;i++){
  buf1[i]=i;
}
log('\nbuffer content:',buf1);

//buffer切片操作
var buf2=buf1.slice(250,256);
log('\nbuffer content:',buf2);

//用0填充buf2
buf2.fill(0);
log('\nbuffer content:',buf2);
