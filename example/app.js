/**
 * Created by zhoujun on 2017/4/22.
 */
const Pink = require('../index');
const app = new Pink({
	listen: 2345,
	rootPath: __dirname
});

app.listen(3456);