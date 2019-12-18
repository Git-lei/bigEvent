# 大事件案例

## 1.后台登录页面功能实现

```js
 /*
    步骤:
        1.对提交按钮进行处理
            方法1:阻止默认提交方式
        2.给按钮设置点击事件
        3.检测两个输入框 内容是否为空
        4.如果检测通过,将内容发送给接口进行检测
        5.接收响应内容
            5.1 响应成功 跳转页面
            5.2 失败 提示
    */
```

### 1.1 页面优化

​			模态框 美化: 引用bootstrap.js  和 bootstrap.css ,使用其中的 模态框模块达到美化的 目的.

### 1.2 代码优化

​			将接口调用、用户操作、请求功能,放在同一 *.js 文件下, 引用,  可以方便与后端的对接,  也可以减少后期维护的工作量
## 2 index 页面 
### 2.1 index页面退出功能
```js
        判断res.code ,执行函数
```
### 2.2 index 个人信息 获取展示
```js
        注意 返回参数的 调用,在success fail 中都需要使用
```
### 2.3 main-count 页面 月新增文章数.日新增文章数  月评论,日评论 获取展示

            功能,简单,实现
### 2.4 main-count 月新增文章数 曲线展示
​         获取回来的是数组,把每一个数组元素,插入到aList_all 中,注意键值对的名字;;;;;
​        <strong> ajax 获取是异步进程,数据可以成功获取,但是在同步进程之后,不会渲染在页面里,,,,所以 通过  async: false  将异步 设置为  false, 利用数组.push(),将获取回来的数据 放到aList-all 里,进行页面渲染!!!</strong>

(github clone 失败问题 ssh 问题)

(over)











### 2.9~2.10 文章搜索\发布\编辑\删除

```js
功能简介  
1 分类数据展示功能    
	- 发送请求，获取数据    
	- 使用模板引擎进行结构生成      
	- 设置模板      
	- 调用模板方法，将数据和模板结合得到要生成的结构字符串      
	- 生成到页面中即可  
2 分类数据新增功能    
	- 点击新增按钮，进行内容检测    
	- 填写完毕，发送请求    
	- 新增成功后，调用location.reload()刷新页面(iframe中的小区域)  
3 分类数据编辑功能   (分类编辑和新增使用的是同一个模态框, 可以设置不同的 button ,设置隐藏于显示,) 
	- 编辑和新增使用的是同一个模态框      
	- 设置一个提交编辑按钮，用来进行编辑操作    
	- 进行操作效果处理：点击新增，将提交编辑按钮隐藏，点击编辑，将新增按钮隐藏    
	- 点击表格中的编辑按钮时，需要获取到数据的id      
	- 可以在创建结构时添加data-id属性保存    
	- 为了方便获取编辑按钮，添加了edit类名    
	- 在模态框中设置隐藏域，用来保存编辑的id    
	- 点击提交编辑，检测内容并发送请求  
4 分类数据删除功能    
	- 点击删除按钮，获取data-id    
	- 将data-id发送给接口进行删除操作
```



















### 2.22 编辑用户信息

#### 用户的信息获取与展示

​        1 请求用户的详细信息,

​					--给表单中的元素设置与相应数据相同的id，方便获取

​						2.22.1.1 发送请求

​		2 将信息展示在页面中即可.

​						2.22.2.1 遍历获取到的数据,对应id 展示

​						2.22.2.2 用户的头像展示需要使用img，而不能给文										件域设置地址

#### 用户的信息编辑功能

```js
1 检测是否完整填写表单
     - 输入框检测val()，文件域检测是否选取文件
2 给表单中的元素设置name属性，否则无法提交
     - 进行提交按钮处理
3 提交到服务端进行编辑
    将数据发送给服务端处理（使用FormData即可）
  	   - 传入参数必须为DOM对象形式的form标签
4 图片的本地预览
   -1 使用change事件监测用户的文件选择操作
   -2 通过 URL.createObjectURL()进行本地图片地址获取
        - URL是window对象的属性
        - 用户在本地选择的图片地址我们不可能提前知道
        - 使用方式：URL.createObjectURL(文件域的files中的文件信息)
        - 返回值是浏览器自动生成的临时图片地址，可以设置在src中查看
```