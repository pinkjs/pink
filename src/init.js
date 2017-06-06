/**
 * Created by zhoujun on 2017/4/22.
 * pinkjs框架的启动脚本
 */
const Loader = require('./load');
module.exports = (object)=>{
	if(object.rootPath == undefined){
		throw '没有指定rootpath'
		//return;
	}
	let load = new Loader(object.rootPath);	//实例化加载器


}
