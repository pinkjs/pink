/**
 * Created by zhoujun on 2017/6/7.
 */
module.exports = function ( action ) {
	return function ( ctx,next ) {
		let result = action(ctx,next);
		console.log(result);
		console.log( );
	}
}