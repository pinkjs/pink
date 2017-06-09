/**
 * Created by zhoujun on 2017/4/22.
 * 自动加载MVC目录，免去手动require
 */
var compose = require('koa-compose');
const fs = require('fs');

Promise = require('bluebird');
var readFile = Promise.promisify(require("fs").readFile);
var readdir = Promise.promisify(require("fs").readdir);

//加载器
class Loader{
	constructor(rootPath){
		this.rootPath = rootPath;
		this.rootFileNames = async()=>await readdir(rootPath);
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



}

module.exports = Loader;


