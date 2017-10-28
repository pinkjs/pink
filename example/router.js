/**
 * Created by zhoujun on 2017/10/28.
 */

module.exports= {
	 'GET /home' : {action: 'home.gethome',middleware:['session','bodyparse','...']},

}