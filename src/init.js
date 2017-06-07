/**
 * Created by zhoujun on 2017/4/22.
 * pinkjs框架的启动脚本
 */
const Loader = require('./load');
module.exports = (object)=>{
	if(object.rootPath == undefined){
		throw '没有指定rootpath'
	}
	let load = new Loader(object.rootPath);	//实例化加载器
	/*
	* 加载顺序，先加载Model再加载Controller，再加载Router，如需要改变请重写此函数。
	*
	* */


}
