/**
 * Created by zhoujun on 2017/4/22.
 *
 *
 * 0.2 version
 *module.exports= {
 * 'GET /home' : {action: 'home.gethome',middleware:['session','bodyparse','...']},
 *
 * }
 *
 */
const home = {
	/*
	* controller是这个路由执行的控制器。middleware 是包在这个控制器上的一层自定义中间件
	* */
	'GET /gethome' : {controller: 'home.gethome',middleware:'session'},
	'POST /home/list' : {controller: 'home.home'},
}

module.exports =  home;