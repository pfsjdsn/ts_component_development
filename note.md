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

