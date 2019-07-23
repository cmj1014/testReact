import React from 'react';
import '@/css/index';// 引入scss
class MyApp extends React.Component {
	constructor(props) {
		super(props); // 先继承reactd 的props参数方法
		this.state = {
			mydata: '我这里就是个参数内容',
			flag:true,
			list:['a1','a2','a3','a4']
		}
		
	}
	clickFlag () {
		//alert(this.state.flag);
		let state = this.state.flag = !this.state.flag;
		alert(state)
		this.setState({
			flag : state
		})
	}
	click2(){
		alert("click2");
	}
	// 这里是页面渲染区域
	render() {
		return (
		<div id="d1">
		<span>	 {this.state.mydata}, 这里是测试数据this.state.mydata </span>
<i><button onClick={(e)=>this.clickFlag(e)}>click</button>这里是if,else的功能,{
			this.state.flag ? <span>我是真</span> :<span>我是假</span>
		}</i>
		<button onClick={this.click2}>click2</button>
		<span>这里是一维数组的遍历</span>
		<div>
		<ul>
		{
			// 我这里是遍历，我是注释
			this.state.list.map((item,index)=>(
				 <li key={item} id={index}> 
		  {item}  
		</li>
			))
		}
		</ul>
		</div>
</div>

		)
	}
}
// 需要暴露出MyApp 才能使用
export default MyApp;