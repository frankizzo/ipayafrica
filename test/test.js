var Ipay=require('./ipayafrica.js');
var ipay = new Ipay.IpayAfrica({vendor_id:'demo',hash_key:'demo',live:false});
var request={
	order_id:'123456'
	,invoice_id:'123456'
	,amount:500
	,telephone:'0725727693'
	,email:'francisthiongo@gmail.com'
	,currency:'KES'
	,param1:''
	,param2:''
	,param3:''
	,param4:''
}
ipay.Rest(request,function(err,res){
	
});