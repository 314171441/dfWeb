# 标题H1

## 标题H2

### 标题H3

#### 标题H4

##### 标题H5

###### 标题H5


*斜体字*

**粗体**  __粗体__

***粗斜体*** ___粗斜体___

这是正文

### 锚点与链接 Links
[普通链接](https://www.mdeditor.com/)
[普通链接带标题](https://www.mdeditor.com/ "普通链接带标题")
直接链接：<https://www.mdeditor.com>
[锚点链接][anchor-id]
[anchor-id]: https://www.mdeditor.com/
[mailto:test.test@gmail.com](mailto:test.test@gmail.com)
GFM a-tail link @pandao
邮箱地址自动链接 test.test@gmail.com  www@vip.qq.com
> @pandao

> 引用文本 Blockquotes


> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](https://www.mdeditor.com/)。

----
增加了一个横线

~~删除线~~ 
<s>删除线（开启识别HTML标签时）</s>

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**
> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启


执行命令：`npm install marked`

#### 缩进风格

即缩进四个空格，也做为实现类似 `<pre>` 预格式化文本 ( Preformatted Text ) 的功能。

    <?php
        echo "Hello world!";
    ?>
#### JS代码
```javascript
function test() {
    console.log("Hello world!");
}
```

#### HTML 代码 HTML codes
```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
    </head>
    <body>
        <h1 class="text-xxl">Hello world!</h1>
    </body>
</html>
```
### 图片 Images

图片加链接 (Image + Link)：
[![markdown](./crane_img.png)] (./crane_img.png "markdown") ![](G:\Study\markdown\crane_img.png)   **缩放图片** <img src="G:\Study\markdown\crane_img.png" style="zoom:50%" >

### 列表 Lists

#### 无序列表（减号）Unordered Lists (-)
- 列表一
- 列表二

#### 无序列表（星号）Unordered Lists (*)
* 列表一
* 列表二

#### 无序列表（加号和嵌套）Unordered Lists (+)
+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2

#### 有序列表 Ordered Lists (-)

1. 第一行
2. 第二行

#### GFM task list

- [x] GFM task list 1
- [ ] GFM task list 2
- [x] GFM task list 3
    - [x] GFM task list 3-1
- [ ] GFM task list 4
    - [ ] GFM task list 4-1

----

### 绘制表格 Tables

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

### 特殊符号 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

[========]

### Emoji表情 :smiley:

> Blockquotes :star:

#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao;
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);

### 反斜杠 Escape

\*literal asterisks\*

[========]

### 科学公式 TeX(KaTeX)

$$E=mc^2$$

行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。

$$x > y$$

```tex
$ f(x,y,z) = 3y^2z \left( 3+\frac{7x+5}{1+y^2} \right) $
```

$$\(\sqrt{3x-1}+(1+x)^2\)$$

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

多行公式：


$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$

$$
\displaystyle
\left( \sum\_{k=1}^n a\_k b\_k \right)^2
\leq
\left( \sum\_{k=1}^n a\_k^2 \right)
\left( \sum\_{k=1}^n b\_k^2 \right)
$$


$$
\displaystyle
    \frac{1}{
        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
        1+\frac{e^{-6\pi}}
        {1+\frac{e^{-8\pi}}
         {1+\cdots} }
        }
    }
$$

$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$


### 分页符 Page break

> Print Test: Ctrl + P



### 绘制流程图 Flowchart

```flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
```

### 绘制序列图 Sequence Diagram

```sequence
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```
### End