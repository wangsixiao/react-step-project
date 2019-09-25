# react-step-project
使用react+typescript实现的上下步流程步骤图

### 启动项目
npm install
npm run start

做项目遇到一个需求，有5步，每一步都有权限控制，并且第一步和第二步需要数据缓存，之前只有两三步可以写死然后各种判断，但是这次加了5步之后，还那样，是要死的节奏啊。之前的代码是去年刚毕业写的，现在看，真是惨不忍睹，这次要优化下。

先看实例图吧，没写什么样式，大致功能是这样：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190924193506827.gif)
#### 1、遇到的问题
###### 1) 声明变量定义类型
在循环中获取定义变量对象的值，然后报错，当时未声明变量的类型；

Element implicitly has an 'any' type because expression of type 'string' can't be used to index type；

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019092510111244.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NDIzNDMx,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190925101126626.png)

搜索了一下，在tsconfig.json里添加 `"noImplicitAny": false`；

后面又具体看了下给的提示，”没有索引签名“，那就给step变量声明个类型：
这个索引签名表示了当用 string去索引stepType时会得到boolean类型的返回值。

```tsx
type stepType = {
  [index: string]: boolean,
}
const step:commonType =  {
      step1: true,
      step2: true,
      step3: true,
      step4: true,
};
```
###### 2）foreach退出循环

用return和break只能退出本次循环，终止循环只能使用throw
```tsx
const {type} = this.state
// 代表从接口获取到的值
const step:commonType =  {
  step1: false,
  step2: true,
  step3: true,
  step4: true,
};
try {
  Object.keys(step).forEach(key => {
    // 找到第一个显示的流程，改变头部颜色
    if(step[key]){
      type[key] = 'active'
      throw new Error()
    }
  })
} catch (e) {}
```

