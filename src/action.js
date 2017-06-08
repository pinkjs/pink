/**
 * Created by zhoujun on 2017/6/7.
 */
module.exports = function ( action ) {
	return async  function ( ctx,next ) {
		try{
			var result = await action(ctx,next);
			if(ctx.body == undefined){
				ctx.body = result;
				if(typeof result !='object'){
					throw '返回值必须是对象'
				}
			}
		}catch (e){
			console.error(e);
			ctx.status = 500;
		}


	}
}