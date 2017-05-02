/**
 * Created by zhoujun on 2017/4/22.
 * 自动加载MVC目录，免去手动require
 */
var compose = require('koa-compose');
const fs = require('fs');
Promise = require('bluebird');
var readFile = Promise.promisify(require("fs").readFile);
var readdir = Promise.promisify(require("fs").readdir);

module.exports = async (rootPath)=>{

	const rootFileNames = await readdir(rootPath);
	await loadRouter(rootFileNames,rootPath);

}

async function loadRouter(rootFileNames,rootPath){
	if(rootFileNames.includes('routers')){
		const router = await readdir(rootPath + '/routers');
		console.log(router);
	}
}