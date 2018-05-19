//《基于 JavaScript 开发灵活的数据应用》教程地址：https://juejin.im/book/5a93727bf265da4e8c452960

/*字符串处理
const text = 'Hey dude, how is it going?';

//去除文本中的标点符号
let wordOnlyText = '';//只保留英文和空格

for(let i=0;i<text.length;i++){
    let letter = text[i];
    let ascllCode = letter.charCodeAt();

    if((ascllCode>=65&&ascllCode<=90)||(ascllCode>=97&&ascllCode<=122||ascllCode===32)){
        wordOnlyText += letter;
    }
}

//console.log(wordOnlyText)//=> "Hey dude how is it going"
//将所有大写字母转换为小写字母
let lowerCaseText = ''

//大写转小写：第一种方案
for (let i = 0; i < wordOnlyText.length; ++i) {
  const letter = wordOnlyText[i]
  const asciiCode = letter.charCodeAt()
  
  if (asciiCode >= 65 && asciiCode <= 90) {
    lowerCaseText += String.fromCharCode(asciiCode + 32)
  } else {
    lowerCaseText += letter
  }
}

//大写转小写：第二种方案
let lowerCaseText2 = wordOnlyText.toLocaleLowerCase()

console.log(lowerCaseText2) //=> "hey dude how is it going"
*/

//数字处理
//幂运算Math.pow(base, exponent)
/*
let V = Math.pow(4,3);
console.log(V)
//对数运算Math.log(x)
function getBaseLog(base, x) {
    return Math.log(x) / Math.log(base)
  }
  
console.log(getBaseLog(2, 1024)) //=> 10
*/
//习题1：尝试使用 JavaScript 将字符串 "Hello World" 中的小写字母全部转为大写字母。
let text = 'Hello World';
let text2 = text.toUpperCase();
//console.log(text2);

//习题2：尝试筛选出章节 2.1.2 中 MIT 开源协议的文本中的大写英文字母
let mitText = `Permission is hereby granted, free of charge, 
to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE....`;

let mitUpperText = '';

for(let i=0;i<mitText.length;i++){
    let letter = mitText[i];
    let ascllCode = letter.charCodeAt();

    if((ascllCode>=65&&ascllCode<=90)||ascllCode===32){
        mitUpperText += letter;
    }
}
//console.log(mitUpperText)

//习题3：使用 JavaScript 完成以下式子的计算：1+（2+3）*4/5-（6+7）
//console.log(1+(2+3)*4/5-(6+7))//-8

//习题4：定义函数 F，接受唯一参数长度为 i 的数列 L。使用 JavaScript 实现该函数。
//F(L) = L1*L2*L3*...*Li
let L = [1,2,3,4,5,6,7,8,9]
function f(L){
    let num = 1;
  
    for(let i=0;i<L.length;i++){
        num *= L[i];
    }
    //console.log(num)
    return num;
}
f(L)
