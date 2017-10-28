/**
 * Created by zhoujun on 2017/4/8.
 * email :zhoujun247@gmail.com
 */


const Emitter = require('events');
const http = require('http');
module.exports = class Pink extends Emitter{

	/*
	* pinkjs的构造函数
	* */
	constructor(object){
		super();

		//this.proxy = false;
		this.middleware = [];
		//this.subdomainOffset = 2;
		this.env = process.env.NODE_ENV || 'development';
		//this.context = Object.create(context);
		//this.request = Object.create(request);
		//this.response = Object.create(response);
		//console.log(this.request)

		//this.use(bodyparse());
		//Promise.resolve(init(object)).then((fn)=>{
		//	this.router = fn;
		//	this.router();
		//
		//});

	}

	load(name,path){

	}

	listen() {
		debug('listen');
		const server = http.createServer(this.callback());
		return server.listen.apply(server, arguments);
	}

}

