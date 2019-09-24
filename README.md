# react-step-project
使用react+typescript实现的上下步流程步骤图

做项目遇到一个需求，有5步，每一步都有权限控制，并且第一步和第二步需要数据缓存，之前只有两三步可以写死然后各种判断，但是这次加了5步之后，还那样，是要死的节奏啊。之前的代码是去年刚毕业写的，现在看，真是惨不忍睹，这次要优化下。

先看实例图吧，没写什么样式，大致功能是这样：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190924193506827.gif)
#### 1、遇到的问题
###### 
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type
