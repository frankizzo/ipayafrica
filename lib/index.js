exports.IpayAfrica = IpayAfrica;

var http = require('http'), https = require('https'), crypto = require('crypto');

function IpayAfrica(globalOptions){
	var ipay = {
		vendor_id:'',
		hash_key:'',
		live:1
	};

	ipay.vendor_id = globalOptions.vendor_id || 'demo';
	ipay.hash_key = globalOptions.hash_key || 'demo';

	if(globalOptions.hasOwnProperty('live')){
		if(globalOptions.live == false) ipay.live = 0;
	}
	var response={
		Rest : function(options,callback){
			var _req={
				live: ipay.live,
				oid: options.order_id || '',
				inv: options.invoice_id || options.order_id,
				amount: options.amount || 0,
				tel: options.telephone || '',
				eml: options.email || '',
				vid: ipay.vendor_id,
				curr: options.currency || 'KES',
				p1: options.param1 || '',
				p2: options.param2 || '',
				p3: options.param3 || '',
				p4: options.param3 || ''				,
				cst: options.sendEmail || 1,
				cbk: options.callback_url || 'http://app.opp.com',
				crl: options.curl || 0
			};

			var webRequest,postData;
			computeHash(_req,ipay.hash_key);
			postData = computeUri(_req);
			console.log(postData);
			webRequest = https.request({method:'POST',host:'api.ipayafrica.com',port:443,path:'/payments/v2/transact'},function(res){
			//var xx=http.request({method:'POST',host:'127.0.0.1',port:1820,path:'/admin/account/sessions/signin.app'},function(res){
				str = '';
				if(res.statusCode==200){
					res.on('data',function(chunk){
						str+=chunk;
					});
					res.on('end',function(){
						console.log(str);
					});
				}else if(res.statusCode==400){
					res.on('data',function(chunk){
						str+=chunk;
					});
					res.on('end',function(){
						console.log(str);
					});
				}else{
					res.on('data',function(chunk){
						str+=chunk;
					});
					res.on('end',function(){
						console.log(str);
					});
				}
			});
			webRequest.write(postData);
			webRequest.end();
		}
	};
	return response;
}
function computeHash(request,key){
	var createHash = function(options){
		var hmac,data = options.data | |'',algorithm = options.algorithm || 'md5', encoding = options.encoding || 'hex';
		hmac = crypto.createHmac(algorithm,key).update(data,'utf8').digest(encoding);
		return hmac;
	};
	var dataString='';
	for(key in request){
		if(key=='crl')continue;
		dataString+=request[key];
	}
	var hash=createHash({
		data:dataString,
		algorithm:'sha256'
	});
	request.hash = hash;
}
function computeUri(request){
	var dataString = '', delimiter = '&';
	for(key in request){
		if(dataString!='')dataString+=''+delimiter+''+key+'='+request[key]+'';
		else dataString+=''+key+'='+request[key]+'';
	}
	//return dataString;
	//dataString=JSON.stringify(request,null,"\t");return dataString;
	dataString=JSON.stringify(request);return dataString;
}
