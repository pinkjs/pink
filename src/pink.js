/**
 * Created by zhoujun on 2017/4/8.
 * email :zhoujun247@gmail.com
 */
const Koa = require('koa');
const init = require('./init');
const request = require('./base/request');
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
		this.request = Object.create(request);
		//this.response = Object.create(response);
		//console.log(this.request)
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

