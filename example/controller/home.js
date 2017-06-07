/**
 * Created by zhoujun on 2017/4/22.
 *
 * 这里每个函数通过es6的export导出。函数有一个参数,参数是一个对象，解构出请求参数。
 *
 * 响应接口。直接return 出对象即可默认的http状态码200，如异常则new throw http状态码500
 *
 */
exports.gethome = async  function gethome( {header,body,request,query} ) {
	const a = 1;
	const b=2;
	console.log(111)
	console.log(header)
	console.log(request)
	console.log(query);
	//业务逻辑

	return {
		a,
		b
	}
}
