/* 排序后去重
    试想我们先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一起，
    然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，
    不相同就添加进 res
* */
/*
* 这里不对啊，全部是一种类型的到行，有数字有字符串的，就有问题的
* */
function unique() {
    var res = [];
    var sortedArray = array.concat().sort();
    var seen;
    for(var i =0,len =sortedArray.length; i<len;i++){
        // 如果是第一个元素或者相邻的元素不同
        if( !i || seen !== sortedArray[i]){
            res.push(sortedArray[i]);
        }
        seen = sortedArray[i];
    }
    return res;
}
var array = [1,2,"1",1];
console.log(unique(array));
console.log(array.sort());



