/**
 * Created by zhoujun on 2017/5/10.
 */
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
chai.use(require("chai-as-promised"));

//const request = require('request');
const request = require('supertest');

describe('app', function() {
	const Pink = require('../src/pink');
	let app = new Pink({
		rootPath: __dirname,
	});

	app.use((ctx,next)=>{ctx.body={result: true}});

	app.listen(3456);


	it('test request',function ( done ) {

		request('http://127.0.0.1:3456').get('/').expect('result', true, done);
	});

});