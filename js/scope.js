/* 在ES6之前，js没有块级作用域，
   只有全局作用域和函数作用域
   变量提升即将变量声明提升到它所在作用域的最开始的部分

 */

// ES6中的let
/*if(false){
    let a = 1;
}
console.log(a); // a is not defined  这里就是块级作用域啦*/

// if for 中的代码块【（）和{}】
/*if(false){
    var a = 1;
}
console.log(a); // undefined  a 提升到了全局*/


/*function f() {
    var scope = 10;
}
console.log(scope); //scope is not defined  在函数中是提升不出来的*/
