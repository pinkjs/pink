/**
 * Created by zhoujun on 2017/4/22.
 * 自动加载MVC目录，免去手动require
 */
var compose = require('koa-compose');
const fs = require('fs');
const _action = require('./action');
Promise = require('bluebird');
var readFile = Promise.promisify(require("fs").readFile);
var readdir = Promise.promisify(require("fs").readdir);
const Router = require('./router')

class Loader{
	constructor(rootPath){
		this.rootPath = rootPath;
		this.rootFileNames = async()=>await readdir(rootPath);
		this.router = new Router();
	}

	async loadFilesByDir(dirName){
		let rootFileNames = await this.rootFileNames();
		if(rootFileNames.includes(dirName)){
			const routers = await readdir(this.rootPath + '/' + dirName);
			return routers.map((router)=>{
				return require(this.rootPath + '/'+ dirName +'/'+ router);
			})
		}
	}

	parseRouter(router){
		for(const key in router){
			let k = key.split(' ');
			let method = k[0];
			let path = k[1];
			if(['GET','POST','PUT','DELETE'].includes(method)){
				try{
					let controllerArr = router[key]['controller'].split('.');
					for(let val of this.controllers){
						if(val[controllerArr[1]]){
							let action = val[controllerArr[1]];		//方法

							this.router.register(path,[method],	_action(action));
						}
					}
					console.log('路由注册成功')

				}catch (e){
					console.error(e);
					new Error('路由定义的控制器名称不正确',e);
				}
			}
		}

	}

}

module.exports = Loader;


