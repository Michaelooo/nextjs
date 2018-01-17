# 一个简单的react应用例子，使用 nextjs , parceljs, yarn ……

一个简单的react应用例子，使用 nextjs , parceljs, yarn ……，会使用最新最热的几门东东，仅供学习使用

## 使用：

```
<!-- 克隆本地 -->
git clone git@github.com:Michaelooo/nextjs.git

<!-- 安装依赖 -->
yarn install 

<!-- 开启服务 -->
yarn run dev
```

## 问题：

* 1. 本来想用 [妹子接口](http://gank.io/api/data/福利/10/1) 来作图的，后来发现始终无法拿到数据，postman可以拿到，**不知道是不是因为服务端发送请求的原因**
* 2. 另外在模式中使用 fetch 获取 本地的 json 数据时候，会报绝对路径的错误，可以参考 https://github.com/zeit/next.js/issues/2853。(备注：因为使用了express，nextjs服务端渲染的特性，所以取本地 json 的时候需要本地暴露一个接口，然后再去读取)