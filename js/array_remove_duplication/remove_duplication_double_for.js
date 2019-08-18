/* 1. 双层循环
* 在这个方法中，我们使用循环嵌套，最外层循环 array，里面循环 res，
* 如果 array[i] 的值跟 res[j] 的值相等，就跳出循环，如果都不等于，
* 说明元素是唯一的，这时候 j 的值就会等于 res 的长度，根据这个特点进
* 行判断，将值添加进 res。
*
* 兼容性好
*
* 注意这里还有变量提升的问题，在ES6之前，js没有块级作用域，
* 只有全局作用域和函数作用域
* 变量提升即将变量声明提升到它所在作用域的最开始的部分
* */
function unique(array) {
    // 用res来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完内部整个循环时，j 等于resLen
        /* 以下这个判断非常关键，利用了break后，j 就会重新置0和
        *  for循环结束j 就会等于循环长度。
        * */
        if (j === resLen) {
            res.push(array[i])
        }
    }
    console.log(i+","+j)
    return res;
}

var array = [1, 1,"1","1"];
console.log(unique(array));
