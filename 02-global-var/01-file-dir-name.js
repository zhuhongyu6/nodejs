#!/usr/bin/node

console.log('file name:',__filename);
console.log('dir name:',__dirname );
/*方案一：不好，没有考虑跨平台
var fileName=__dirname+'/views/view.html';
console.log('data file:',fileName);*/


/*方案二：不好，代码复杂，平台考虑不全面
switch(process.platform){
  case 'linux':
    fileName=__dirname+'/views/view.html';
    break;
  case 'win32':
    fileName=__dirname+'\\views\\view.html';
    break;
  default:
    fileName='something wrong';
}
console.log('fileName:',fileName);
*/


//方案三：最好
const path=require('path');
fileName=path.join(__dirname,'views','login.html');
console.log('fileName:',fileName);





