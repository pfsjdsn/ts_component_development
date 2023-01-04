#### 查看 tsc 版本

```js
tsc -v
```



#### 运行文件

```js
tsc fileName.ts
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



