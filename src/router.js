/**
 * Created by zhoujun on 2017/5/2.
 */
var compose = require('koa-compose');
const KoaRouter = require('koa-router');
const _action = require('./action');
const bodyparse = require('koa-bodyparser');
class Router extends KoaRouter{
	constructor(){
		super()
	}
	parseRouter(controllers){
		return  ( router ) =>{
			for(const key in router){
				let k = key.split(' ');
				let method = k[0];
				let path = k[1];
				if(['GET','POST','PUT','DELETE'].includes(method)){
					try{
						let controllerArr = router[key]['controller'].split('.');
						for(let val of controllers){
							if(val[controllerArr[1]]){
								let action = val[controllerArr[1]];		//方法
								this.use(bodyparse());
								this.register(path,[method],	_action(action));
							}
						}
						console.log(`自动加载路由${path}成功`)
					}catch (e){
						console.error(e);
						new Error('路由定义的控制器名称不正确',e);
					}
				}
			}
		}

	}
}
module.exports = Router;