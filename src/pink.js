/**
 * Created by zhoujun on 2017/4/8.
 * email :zhoujun247@gmail.com
 */

const Koa = require('koa');
const init = require('./init');
const load = require('./load');

class Pink extends Koa{
	/*
	* pinkjs的构造函数
	* */
	constructor(object){
		super();
		this.rootPath = object.rootPath;

		this.loadBaseDir();
	}
	/*
	* 自动加载基础的目录结构
	* */
	loadBaseDir(){
		load(this.rootPath).then()
	}


}

module.exports = Pink;