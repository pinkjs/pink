/**
 * Created by zhoujun on 2017/4/8.
 * email :zhoujun247@gmail.com
 */
const Koa = require('koa');
const init = require('./init');
const request = require('./base/request');

class Pink extends Koa{
	/*
	* pinkjs的构造函数
	* */
	constructor(object){
		super();
		this.rootPath = object.rootPath;
		this.router = Router;
		this.listenPort = object.listen;
		this.request = request;
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