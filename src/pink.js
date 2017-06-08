/**
 * Created by zhoujun on 2017/4/8.
 * email :zhoujun247@gmail.com
 */
const Koa = require('koa');
const bodyparse = require('koa-bodyparser');
const init = require('./init');
global.Promise = require('bluebird');
//const request = require('./base/request');
//const response = require('./base/response');
//const context = require('./base/context');

module.exports = class Pink extends Koa{
	/*
	* pinkjs的构造函数
	* */
	constructor(object){
		super();
		//this.rootPath = object.rootPath;
		//this.proxy = false;
		//this.middleware = [];
		//this.subdomainOffset = 2;
		//this.env = process.env.NODE_ENV || 'development';
		//this.context = Object.create(context);
		//this.request = Object.create(request);
		//this.response = Object.create(response);
		//console.log(this.request)

		//this.use(bodyparse());
		Promise.resolve(init(object)).then((fn)=>{
			this.router = fn;
			this.router();

		});

	}

	/*
	* 重写koa的方法
	* */
	//createContext(req, res){
	//
	//}
	//
	//callback(){
	//
	//}

}

