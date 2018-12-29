#!/usr/bin/node

var buf1=new Buffer(256);
buf1[0]=23;

console.log('buf1 length:',buf1.length);
console.log('\nbuf1 content:',buf1);

for(var i=0;i<256;i++){
  buf1[i]=i;
}
console.log('\nbuf1 content:',buf1);

//buffer切片操作
var buf2=buf1.slice(250,256);
console.log('\nbuf2 content:',buf2);

//用0填充buf2
buf2.fill(0);
console.log('\nbuf2 content:',buf2);

//用数组初始化buf3
var array=['a',0xba,0xdf,0x00,255,10];
var buf3=new Buffer(array);
console.log('\nbuf3:',buf3.length,buf3);

//用字符串初始化buf4
var buf4=new Buffer('hello','utf8');
console.log('\nbuf4:',buf4.length,buf4.toString());

//将buf4的内容复制到buf5中
var buf5=new Buffer(buf4.length);
buf4.copy(buf5,0,0,buf4.length);
console.log('\nbuf5:',buf5.length,buf5.toString());


