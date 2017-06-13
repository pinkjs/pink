# Pink.js

对于Nodejs服务器端架构的思考，以及作者在开发Nodejs项目的同时遇到的一些问题，整理出了一套Nodejs分布式架构框架Pink.js

# 一、 传统架构遇到的问题
    
传统的架构比如使用koa开发一个项目，流程如下：
1. 部署开发环境，安装koa，安装各种中间件，选择数据库包。如果不使用其他第三方包需要自己写异常处理，session权限验证等。
2. 随着需求的不但的增加，项目版本的迭代。代码量会越来越庞大。
3. 最可悲的是这个时候可爱的产品对我们随着需求变更。需要重构，这下就懵了。需要对一个庞大的系统进行重构，时间成本高昂。
4. 对团队的新人很难review庞大代码
# 二、 Pink.js 的架构设计。
TDD方法

controller
```js
exports.gethome = async  function gethome( {header,body,request,query} ) {
	const a = 1;
	const b=2;
	if(header.session_id == '123456'){
        return {
            result: true,
            b
        }
	}
	
}
```

test

```js
const home = require('../controller/home');

var expect = require('chai').expect;

describe( 'home',function (  ) {
	it('gethome',function (  ) {
		return home.gethome({ header:{session_id: '123456'}}).then((result)=>{
			expect(result).to.have.property('result');
		});
	});

} )

```

pink.js是为微服务设计的框架。

# 三、快速开始

```js
const Pink = require('../index');

const app = new Pink({
	rootPath: __dirname,

});

app.listen(3456);
```

 框架目录结构参考example目录
 

### pinkjs框架有如下子模块支持：

1. pink-mysql   提供Mysql数据库对象模型  V1.0.0
2. pink-redis   提供Redis的常用操作    （未完成）
3. pink-mongo   提供Mongodb的模型（未完成）
4. pink-request 提供更好的异步网络请求客户端。（未完成）
5. pink-cli     提供生成脚手架的脚本（未完成）
6. pink-view    提供pinkjs中的mvc中的V层，开发web端需要按照。开发接口不必。（未完成）
7. pink-auth    提供身份验证的中间件。（未完成）
8. pink-logger  提供pinkjs中的日志统一管理（未完成）

