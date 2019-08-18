/* 对象相关的方法*/

// 属性的查看
{
    let obj = {
        key1: 1,
        key2: 2
    };
    let res= Object.keys(obj);
    console.log(res);   // ['key1', 'key2']

}
console.log("----------------------------------");

// 属性的删除
{
    let obj = { p: 1 };
    Object.keys(obj); // ["p"]
    let bool  = delete obj.p; // true
    let p = obj.p; // undefined
    let res = Object.keys(obj); // []
    console.log(bool);
    console.log(res);
}
console.log("----------------------------------");
{
    let obj = Object.defineProperty({}, 'p', {
        value: 123,
        configurable: false
    });
    console.log(Object.keys(obj))
    let p = obj.p // 123
    let bool = delete obj.p // false
    console.log(p);
    console.log(bool);
    console.log(Object.keys(obj))

}
console.log("----------------------------------");

