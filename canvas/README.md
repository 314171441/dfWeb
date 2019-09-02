# Canvas记录
### 基本Canvas标签
```
<div id="canvas-warp">
    <canvas id="canvas" style="border: 1px solid #aaaaaa; display: block; margin: 50px auto;">
        你的浏览器居然不支持Canvas？！赶快换一个吧！！
     </canvas>
</div>
```

````javascript
let canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;
let context = canvas.getContext("2d");

context.beginPath();
context.moveTo(150,50);
context.lineTo(650,50);
context.lineTo(650,550);
context.lineTo(150,550);
context.closePath();        //使用closePath()闭合图形

context.fillStyle = "pink";
context.lineWidth = 50;
context.strokeStyle = "black";

context.fill();
context.stroke();

````
* context.fill();
* content.stroke();
   这两个的顺序也是会有影响的哦
   这是为什么呢？
   这是因为lineWidth是发散两边的，就是说定位点是线宽的中间
   先填充或则先画线，其实就是覆盖没覆盖半个线宽的事情

```context.react(cxt,x,y,width,height); // 绘制矩形的方法```
