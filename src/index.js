import React from 'react'; // React必须的模块
// 给某一个DOM节点渲染节点时用到，它是从React中分离出来的
import ReactDOM from 'react-dom';
// import Vue from 'vue'
import App from '@/components/App';

// 将虚拟的组件渲染到视图中
// 组件的首字母必须大写，如果是小写，会被认为是固有的HTML标签，组件的文件名也建议首字母大写
ReactDOM.render(
	 <App />,
	//<MyApp />,
	document.getElementById("root"),
	//document.getElementById("a1")
)