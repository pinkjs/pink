/**
 * Created by zhoujun on 2017/4/22.
 */
const Pink = require('../index');
const app = new Pink({
	rootPath: __dirname,
	NODE_ENV: process.NODE_ENV || 'development',
});

app.load('controller','./controlller')
app.load('model','./model');
app.load('router','./router');

app.listen(3456);