[toc]
# 项目说明
> 这是一个React基础的demo，会写入基本配置和安装依赖 。以及大多数方法使用说明
> 本项目采用webpack3配置和react开发项目，使用webpack3是为了练习它的配置，和理解到webpack4的升级理解
> webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

## 安装依赖
```
// (本项目)安装webpack 3
cnpm i vue-cli -g
// 创建一个文件myapp在里面创建webpack配置文件
vue init webpack myapp

// (选：webpack 4) cnpm i @vue/cli -g
// 创建一个文件myapp在里面创建webpack配置文件
vue create myapp / vue ui

//安装依赖测试webpack
cnpm / npm i webpack@3 -g	(全局)
cnpm / npm i webpack@3 -D (-D --save-dev) （-S --save）

// 代码压缩工具
cnpm / npm i html-webpack-plugin -D

// css解析器
cnpm / npm i style-loader css-loader@0 -D
// sass解析器	
cnpm / npm i node-sass sass-loader -D
// less解析器	
cnpm / npm i less less-loader -D
// stylus解析器
cnpm / npm i stylus stylus-loader -D
// js解析器 可以解析更高级的js语法es6及以上
cnpm / npm i babel-core@6 babel-loader@7 -D
//如果要使用js最新的语法，那么需要安装相应的模块并且配置
cnpm / npm i babel-preset-env -D
// 热加载，就是修改后会自动编译
cnpm / npm i babel-preset-react -D
// 解析器 -- 媒体文件、字体文件、背景图片
cnpm / npm i url-loader -D
//webpack的开发服务器 
// cnpm / npm i webpack-dev-server@2 -g  (我是全局安装)
cnpm / npm i webpack-dev-server@2 -D
// 数据请求方式，，这里还会用它做反向代理
cnpm i axios -S
// react-dom模块，创建虚拟dom用
cnpm i react react-dom -S

```

## 热部署配置
> 在安装了热部署模块后，需要在package.json中增加内容，在“scripts”内容中增加 "dev": "webpack-dev-server"  这条指令，之后启动项目改成cnpm / npm run dev   
> 这样子就会是热部署的项目，随时修改随时编译

## 配置文件路径指向
> 配置@指向src目录,需要在webpack.config.js 进行配置，在resolve: 项中写入
```
	alias: { 
      '@': path.join(__dirname, './', 'src')
    }
```