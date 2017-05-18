/**
 * Created by zhoujun on 2017/4/9.
 * email :zhoujun247@gmail.com
 */

const request = require('koa/lib/request');
const uuidV4 = require('uuid/v4');


const pinkRequest = {

};

function PinkRequest(){
	//this.request_id = get (){
	//	return uuidV4();
	//}
}
PinkRequest.prototype = request;
PinkRequest.prototype.constructor = PinkRequest;

//const req = Object.assign(request,pinkRequest);
//console.log(req);
module.exports = pinkRequest;