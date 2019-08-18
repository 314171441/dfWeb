/* 使用indexOf 简化内层的循环
*  代码是简单，但是效率不如双层for快吧？
* */
function unique(array) {
    var res = [];
    for(var i=0,len = array.length; i<len; i++){
        var current = array[i];
        if(res.indexOf(current) === -1){
            res.push(current)
        }
    }
    return res;
}

var array = [1,1,"1"];
console.log(unique(array));
