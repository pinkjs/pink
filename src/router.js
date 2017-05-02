/**
 * Created by zhoujun on 2017/5/2.
 */
var compose = require('koa-compose');

function Router(opts) {
	if (!(this instanceof Router)) {
		return new Router(opts);
	}

	this.opts = opts || {};
	this.methods = this.opts.methods || [
			'HEAD',
			'OPTIONS',
			'GET',
			'PUT',
			'PATCH',
			'POST',
			'DELETE'
		];

	this.params = {};
	this.stack = [];
};
