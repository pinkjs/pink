/**
 * Created by zhoujun on 2017/6/8.
 */
module.exports = async function session( ctx,next ) {
	console.log('sesion中间件');
	await next();
}