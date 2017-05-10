# Pink.js

对于Nodejs服务器端架构的思考，以及作者在开发Nodejs项目的同时遇到的一些问题，整理出了一套Nodejs分布式架构框架Pink.js

# 一、 传统架构遇到的问题
    
传统的架构比如使用koa开发一个项目，流程如下：
1. 部署开发环境，安装koa，安装各种中间件，选择数据库包。如果不使用其他第三方包需要自己写异常处理，session权限验证等。
2. 随着需求的不但的增加，项目版本的迭代。代码量会越来越庞大。
3. 最可悲的是这个时候可爱的产品对我们随着需求变更。需要重构，这下就懵了。需要对一个庞大的系统进行重构，时间成本高昂。
4. 对团队的新人很难review庞大代码
# 二、 Pink.js 的架构设计。

pink.js的定位就象把自己作为航母（一个web-server实例），业务代码封装为npm包作为航母上各式各样的武器。可以随意的拆分自由组合。

# 快速开始

```js
const Pink = require('pink'); // pinkjs包

const user = require('user'); // 用户逻辑代码封装的包 建议发布到自己的私有npm服务器管理 

const order = require('order'); // 订单逻辑

const product = require('product'); // 产品逻辑

const db = require('db');   //数据包配置文件
  
const server  = new Pink({
	'/user': user(db),          //url 第一段为user的路由到user模块
	'/order': order(db),
	'/product': product(db)
});

server.listen(3000);
```

以上代码可以随意拆，如果想让订单逻辑高可用可以独立拆到一个服务器上。只要实例化一个Pink 注入 order模块即可。

 框架目录结构参考example目录
 
```$xslt
 -example
 |----config
 |----controller
 |----model
 |----router
 |----service
 |----mindiware
 |----app.js    //入口
```

框架实现功能：
1. 自动require ,在用koa这种轻量级框架的时候、加一个文件需要自己require。pinkjs在启动app的时候把规定目录里的文件全部自动载入。
2. 在接口开发中往往会遇到参数校验，当接口的请求参数过多时候，校验参数的代码过多。pinkjs实现参数校验与业务逻辑分离。自动校验参数


### pinkjs框架有如下子模块支持：

1. pink-mysql   提供Mysql数据库对象模型  V1.0.0
2. pink-redis   提供Redis的常用操作    （未完成）
3. pink-mongo   提供Mongodb的模型（未完成）
4. pink-request 提供更好的异步网络请求客户端。（未完成）
5. pink-cli     提供生成脚手架的脚本（未完成）
6. pink-view    提供pinkjs中的mvc中的V层，开发web端需要按照。开发接口不必。（未完成）
7. pink-auth    提供身份验证的中间件。（未完成）
8. pink-logger  提供pinkjs中的日志统一管理（未完成）

