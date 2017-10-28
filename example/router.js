/**
 * Created by zhoujun on 2017/10/28.
 *
 * 路由的配置文件
 */

module.exports= {
	 'GET /home' : {action: 'home.gethome',middleware:['session','bodyparse','...']},

}