const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: { // 入口文件，指明应用程序的入口在哪里 ---- vue项目中的main.js的指定
    app: './src/index.js' ,// 集合输出，可以生成或者打包出一个js文件为app.js
	myapp:'./src/myapp.js' // 我自己的练习的组件
  },
  output: { // 输出配置，
    path: __dirname + '/dist', // __dirname 代表当前文件的绝对目录， /dist表示项目打包到哪一个目录
    filename: '[name].js' // name会代替entry入口文件的key值
  },
  plugins: [ // 所需要使用到的插件， 压缩js，复制页面模板... ---- 数组
    // 压缩js的模块 -- webpack内部，需要导入webpack
    new webpack.optimize.UglifyJsPlugin(),
    // 复制index.html到dist目录，并且自动引入输出的app.js
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: { // 各种解析器 - css、less、scss、stylus、js...
    rules: [ // 解析器规则
      {
        test: /\.css$/, // 所有以.css结尾的文件
        loader: 'style-loader!css-loader' // 从右到左解析
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.stylus$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(js|jsx)$/, // 以前jsx文件用jsx-loader来解析
        loader: 'babel-loader'
      },
      { 
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader', 
        options: { 
          limit: 10000, // 图片大小
          name: path.posix.join('static','img/[name].[hash:7].[ext]') 
        } 
      },
      { 
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: { 
          limit: 10000, 
          name: path.posix.join('static', 'media/[name].[hash:7].[ext]') 
        } 
      }, 
      { 
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, 
        loader: 'url-loader', 
        options: { 
          limit: 10000, 
          name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]') 
        } 
      }
    ]
  },
  devServer: {// 配置服务器
    host: '127.0.0.1', // 如果需要局域网内的同事访问项目，需要设置
    port: 8080,// 端口号
    // open: true,
    proxy: {//反向代理
      '/api': {
        target: 'https://movie.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  resolve: {
    extensions: [ // 代码中可以省略的后缀, 遇到同名不同后缀，谁在前面，以谁为主
      '.css', '.scss', '.less', '.stylus', '.vue', '.js', '.jsx'
    ],
    alias: { // 配置@指向src目录
      '@': path.join(__dirname, './', 'src')
    }
  }
}