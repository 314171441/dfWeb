/* const 是静态变量，不可修改*/

// 当const标识的是引用类型的话，引用是不能修改的，但是引用的内容是可以修改的
{
    const obj = {a:1};
    let bool = delete obj.a;
    console.log(bool);
    /*obj = {b:2};*/  // 报错：TypeError: Assignment to constant variable.
}

