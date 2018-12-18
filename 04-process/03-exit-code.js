#!/usr/bin/node

var code=process.argv[2];
console.log(code);
if(process.argv.length<3){
console.log('请给出命令行参数！');
process.exit(1);
}

if(typeof code!=='number'){
  console.error('命令行参数类型应该是数值类型');
  process.exit(1);
}

process.exit(code);
