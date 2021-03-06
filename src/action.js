/**
 * Created by zhoujun on 2017/6/7.
 */
module.exports = function ( action ) {
	return async  function ( ctx,next ) {
		try{
			var resBody = await action(ctx,next);
			if( resBody == undefined  || typeof resBody != 'object'){
				Promise.reject('action 没有返回值');
			}
			if(resBody.hasOwnProperty('result') ){
				resBody.result = true;
			}
			ctx.body = resBody;
		}catch (e){
			console.error(e);
			ctx.status = 500;
			ctx.body = {
				result:false,
				error:e
			}
		}
	}
}