/*
*  分析 for循环 while循环  do while循环  的使用方法
*  for循环是知道明确循环数量的
*  while和do while是：do while一般是执行方法体在do中，第一次一定会执行一次do
*  do...while循环与while循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。
* */

var i = 0;

while (i < 100){
    i++;
    if (i % 2 === 0) continue;
    console.log('i 当前为：' + i);
}

foo: {
    console.log(1);
    break foo;
    console.log('本行不会输出');
}
console.log(2);
