/**
 * Created by zhoujun on 2017/4/22.
 * pinkjs框架的启动脚本
 */
const Loader = require('./load');
const Router = require('./router')
module.exports = async (object)=>{
	if(object.rootPath == undefined){
		console.error('no rootPath');
		throw '没有指定rootpath'
	}

	const load = new Loader(object.rootPath);	//实例化加载器
	const router = new Router();						//实例化路由

	let controllerArr = await load.loadFilesByDir('controller');

	let routerArr = await load.loadFilesByDir('routers')

	let middlewareArr = await load.loadFilesByDir('middleware')

	load.controllers = controllerArr;
	let parseRouter = router.parseRouter(controllerArr,middlewareArr);
	Promise.map(routerArr,parseRouter);

	return function (){
		this.use(router.routes()).use(router.allowedMethods())

	}
}
