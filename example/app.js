/**
 * Created by zhoujun on 2017/4/22.
 */
const Pink = require('../index');

const app = new Pink({
	rootPath: __dirname,

});

//app.use(async (ctx,next)=>{
//	console.log(ctx.method);
//	console.log(ctx.request_id);
//	ctx.body = ctx.method;
//	await next();
//})

app.listen(3456);