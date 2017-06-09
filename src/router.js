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
	parseRouter(controllers,middlewares){
		return  ( router ) =>{
			for(const key in router){
				let k = key.split(' ');
				let method = k[0];
				let path = k[1];
				let routermiddlewareArr = []
				if(['GET','POST','PUT','DELETE'].includes(method)){
					if(method !='GET'){
						routermiddlewareArr.push(bodyparse());
					}
					try{
						let controllerArr = router[key]['controller'].split('.');
						if(router[key]['middleware'] ){
							for(let val of middlewares){
								if(val.name == router[key]['middleware'] ){
									routermiddlewareArr.push(val);
								}
							}
						}
						for(let val of controllers){
							if(val[controllerArr[1]]){
								let action = val[controllerArr[1]];		//方法
								routermiddlewareArr.push(_action(action));
								this.register(path,[method],	compose(routermiddlewareArr));
							}
						}
						console.log(`自动加载路由${path}成功`);
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