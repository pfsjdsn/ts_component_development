#### 查看 tsc 版本

```js
tsc -v
```



#### 运行文件（生成js文件）

```js
tsc fileName.ts
```



#### 运行文件（可打印出结果）

```js
ts-node fileName.ts
```



#### ts-node安装

```js
npm install -g  @types/node
```



#### 查看文件内容

```js
cat fileName.ts
```





#### git pus 报错

fatal: unable to access 'https://github.com/pfsjdsn/ts_component_development.git/': OpenSSL SSL_read: Connection was reset, errno 10054

解决方案：

解除ssl验证

```js
git config --global https.sslVerify "false"
```



#### ts 报错 类型“any”的参数不能赋给类型“never”的参数。

原因：item已经定义了any类型，但是data的类型还没有定义，默认为never

解决：

这里要用到TS的类型断言，通过TS的类型断言强制把data的类型转化为any，就正常不会报错了

```js
class Queue{
    // 处理前
    // private data = []
	// 处理后
    private data = <any>[]
    push(item){
        return this.data.push(item)
    }
   
}
```



#### ts 报错 在赋值前使用了变量“sum”

解决：

用@ts-ignore注释标记

```js
let sum:(x:number,y:number) =>number
// @ts-ignore
const result = sum(1,2)
```



#### vue3报错 找不到模块“[axios](https://so.csdn.net/so/search?q=axios&spm=1001.2101.3001.7020)”或其相应的类型声明

解决：

项目未安装axios依赖，项目根目录下执行下列指令

```js
cnpm install --save axios 
```



#### vue3 teleport 的使用

my-project\src\components\ModalDig.vue

```vue
<template>
    <!-- 
        teleport：传送，瞬间转移 
        解决的问题：Dialog 被包裹在其它组件中，容易被干扰，样式在其它组件中容易变得混乱，解决Dialog组件嵌套比较深的问题
     -->
// to 表示在渲染哪个css dom上去,此处表示为渲染到id为modal上的dom上
    <teleport to="#modal">
        <div id="center">
            <h2>this is modal</h2>
        </div>
    </teleport>
</template>
```

```js
<script lang="ts">
export default {

}
</script>
```



```css
<style>
#center {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
}
</style>
```



使用

my-project\src\App.vue

```vue
<template>
  <ModalDig />
</template>
```

```js
<script lang="ts">
    import ModalDig from './components/ModalDig.vue'
export default {
  name: 'App',
  components: {
    ModalDig
  }
}
</script>

```

my-project\public\index.html

```vue
<!DOCTYPE html>
<html lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title>
    <%= htmlWebpackPlugin.options.title %>
  </title>
</head>

<body>

  <div id="app"></div>
  <div id="modal"></div>

</body>

</html>
```



效果

![image-20230106101816110](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20230106101816110.png)

