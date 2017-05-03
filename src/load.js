/**
 * Created by zhoujun on 2017/4/22.
 * 自动加载MVC目录，免去手动require
 */
var compose = require('koa-compose');
const fs = require('fs');
Promise = require('bluebird');
var readFile = Promise.promisify(require("fs").readFile);
var readdir = Promise.promisify(require("fs").readdir);
const Router = require('./router')
module.exports = Loader;

class Loader{
	constructor(){

		this.init();
	}
	async init (rootPath,type){
		const rootFileNames = await readdir(rootPath);

		this.controllers =  await this.loadController(rootFileNames,rootPath);

		if(type == 'router'){
			const routers =  await this.loadRouter(rootFileNames,rootPath);
			this.parseRouter(routers);
		}


	}

	async loadRouter(rootFileNames,rootPath){
		if(rootFileNames.includes('routers')){
			const routers = await readdir(rootPath + '/routers');
			return routers.map((router)=>{
				return require(rootPath + '/routers/'+ router);
			})
		}
	}

	parseRouter(routers){
		let _router = new Router();
		routers.forEach((router)=>{
			for(const key in router){
				let k = key.split(' ');
				let method = k[0];
				let path = k[1];
				if(['GET','POST','PUT','DELETE'].includes(method)){
					try{
						let controllerArr = router[key]['controller'].split('.');
						let controller = this.controllers[controllerArr[0]];
						let middleware = controller[controllerArr[1]]
						_router.register(path,method,middleware);
					}catch (e){
						new Error('路由定义的控制器名称不正确',e);
					}
				}
			}
		})
	}

	async loadController( rootFileNames,rootPath ) {
		if(rootFileNames.includes('controller')){
			const routers = await readdir(rootPath + '/controller');
			return routers.map((router)=>{
				return require(rootPath + '/controller/'+ router);
			})
		}
	}
}




