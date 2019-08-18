/*
*  在alert和console.log都打印的时 [object object]
*  并且JSON.stringfy（obj）  会报错TypeError: JSON.stringify cannot serialize cyclic structures.
*  stringify不能序列化循环结构。
* */

function objectfy(obj){
    var seen = [];
    var json = JSON.stringify(obj, function(key, value){
        if (typeof value === 'object') {
            if ( !seen.indexOf(value) ) {
                return '__cycle__' + (typeof value) + '[' + key + ']';
            }
            seen.push(value);
        }
        return value;
    }, 4);
    return json;
}
