# Pink.js

 pink.js 是一个在Koa2的基础上深度封装的一个框架。类似阿里的Egg但不同于Egg
 
 Koa是一个非常优秀的Nodejs框架、其最大的特点是它的洋葱中间件。
 
 本框架作者也是一个Koa的重度使用者、使用Koa开发过好几个项目。Koa只是一个基础的框架，一个简单的web项目需要、router、controller、model、service等分层。
 
 直接使用Koa则需要自己手动搭建一个开发的目录结构，手动组合一些第三方库。如果数据库采用Mysql则需要安装Mysql模块。简单封装Mysql模块的方法，以便在Koa里调用。
 
 Pinkjs就是作者在开发过程中积累的经验和一些在项目里使用的认为封装好的方法抽出来组成的框架。
 
 
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

1. pink-mysql   提供Mysql数据库对象模型  （未完成）
2. pink-redis   提供Redis的常用操作    （未完成）
3. pink-mongo   提供Mongodb的模型（未完成）
4. pink-request 提供更好的异步网络请求客户端。（未完成）
5. pink-cli     提供生成脚手架的脚本（未完成）
6. pink-view    提供pinkjs中的mvc中的V层，开发web端需要按照。开发接口不必。（未完成）
7. pink-auth    提供身份验证的中间件。（未完成）
8. pink-logger  提供pinkjs中的日志统一管理（未完成）

