#大事件案例

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

###1.1 页面优化

​			模态框 美化: 引用bootstrap.js  和 bootstrap.css ,使用其中的 模态框模块达到美化的 目的.

### 1.2 代码优化

​			将接口调用、用户操作、请求功能,放在同一 *.js 文件下, 引用,  可以方便与后端的对接,  也可以减少后期维护的工作量