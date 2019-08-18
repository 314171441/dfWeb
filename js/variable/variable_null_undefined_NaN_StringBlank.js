/* null 、undefined、NaN和“”的区别，
 * 关键是null和undefined的区别
  * */
// 这五种都会被条件判断当做false
if (!0) {
    // (*切记:!0也是会返回true的,也就是说0也会被当做无效数据,请根据实际情况自己组合判断)
    console.log("df---在条件判断中，0会被自动当成false")
}
if (!"") {
    console.log("df---在条件判断中，空字符串“”会被自动当成false")
}
if (!undefined) {
    console.log("df---在条件判断中，undefined会被自动当成false")
}
if (!null) {
    console.log("df---在条件判断中，null会被自动当成false")
}
if (!NaN) {
    console.log("df---在条件判断中，NaN会被自动当成false")
}
console.log("----------------------------------");

// 来看一个typeof 输入的类型吧
let f = function () {
}
console.log(typeof 123);    // number
console.log(typeof 12.1);   // number
console.log(typeof "e23e2e3");  // string
console.log(typeof []);     // object
console.log(typeof null);   // object
console.log(typeof undefined);  // undefined
console.log(typeof NaN);    // number ？？？？NaN是一种特殊的number,NaN与任何值都不相等,与自己也不相等。
console.log(typeof f);  // function
console.log(f); //[Function: f]
console.log("----------------------------------");

// null在转换成强制类型时会变成0
let a = Number(null) // 0
let b = 5 + null // 5
console.log(a + "," + b);

console.log(undefined == null);  // true
console.log(NaN == NaN); //false,NaN是一种特殊的number,NaN与任何值都不相等,与自己也不相等。

console.log("----------------------------------");

/*单独判断null,undefined,NaN的方法:*/

// 判断NaN:
var tmp = 0 / 0; //0做除数是算法错误,所以结果是NaN
if (isNaN(tmp)) {
    console.log("NaN");
}

// 判断undefined:
var tmp = undefined;
if (typeof (tmp) == "undefined") {
    console.log("undefined");
}

//判断null:
var tmp = null;
if (!tmp && typeof (tmp) != "undefined" && tmp != 0) {
    console.log("null");
}

//判断undefined和null:
var tmp = undefined;
if (tmp == undefined) {
    console.log("null or undefined");
}
var tmp = undefined;
if (tmp == null) {
    console.log("null or undefined");
}

