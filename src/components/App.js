import React from 'react';

class App extends React.Component {
	constructor (props) {
		super (props); // 先继承reactd 的props参数方法
		 /**
     * ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
     * ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
     * 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。
     */
		this.state = { // 初始化的数据 --- 初始化状态 // 干自己的事业
			msg :'hello react'
		}
	}
	// 这个是react的方法，开始渲染页面
	render () {
		let test = this.state.msg
		return (
		<div> {this.state.msg} ,123这里通过js 写法加{}输出---也可以自定义变量接受{test},谢谢参与</div>
		)
	}
}
// 需要暴露出App 才能使用
export default App;
