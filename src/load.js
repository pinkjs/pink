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
module.exports = async (rootPath,type)=>{
	const rootFileNames = await readdir(rootPath);
	if(type == 'controller'){
		const controllers =  await loadController(rootFileNames,rootPath);
	}

	if(type == 'router'){
		const routers =  await loadRouter(rootFileNames,rootPath);
		parseRouter(routers);
	}



}

async function loadRouter(rootFileNames,rootPath){
	if(rootFileNames.includes('routers')){
		const routers = await readdir(rootPath + '/routers');
		return routers.map((router)=>{
			return require(rootPath + '/routers/'+ router);
		})
	}
}

function parseRouter(routers){
	let router = new Router();
	routers.forEach((router)=>{
		for(const key in router){
			let k = key.split(' ');
			let method = k[0];
			let path = k[1];
			if(['GET','POST','PUT','DELETE'].includes(method)){

				router.register(path,method,)
			}
		}
	})
}

function loadController(  ) {
	
}