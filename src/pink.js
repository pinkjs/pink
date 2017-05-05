/**
 * Created by zhoujun on 2017/4/8.
 * email :zhoujun247@gmail.com
 */
const Koa = require('koa');
const init = require('./init');
const Loader = require('./load');
const Router = require('./router');
const request = require('./base/request');

class Pink extends Koa{
	/*
	* pinkjs的构造函数
	* */
	constructor(object){
		super();
		this.rootPath = object.rootPath;
		this.router = Router;
		this.loadBaseDir();
		this.listenPort = object.listen;
		this.request = request;
	}
	/*
	* 自动加载基础的目录结构
	* */
	loadBaseDir(){
		let load = new Loader(this.rootPath);
		this.middleware.push(load.routerMiddleware);
		//let dirPromise = Promise.resolve(load());
		//dirPromise.then((re)=>{
		//	//this.middleware.push(load(this.rootPath,'router'))
		//})
	}

	/*
	* 重写koa的方法
	* */
	createContext(req, res){

	}

	callback(){

	}

}

module.exports = Pink;