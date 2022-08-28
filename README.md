# package.json 文件说明
- require-directory 读取某个文件夹下的所有 文件

# 获取参数的说明
```js
 console.log("path",ctx.params); // 获取 url 里面的 :xxx 参数
console.log("path",request.query); // 获取 url ? 后的参数
console.log("path",request.body); // 获取 body 里面的参数
console.log("path",request.header); // 获取 header

```
