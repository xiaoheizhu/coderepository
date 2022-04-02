//try和catch一般在预计某段代码可能会出错(比如浏览器兼容问题)或者想故意利用这种错误达成目的时，就可以把这段代码放入try内，然后当遇到错误时就会去执行catch内容
function captureErr(num){
	try{
		if(num=="") throw "值为空"
		if(isNaN(num)) throw "不是数字"
		if(num<0) throw "太大了"
		if(num>100) throw "太小了"
	}catch(e){
		//TODO handle the exception
		console.log("err================>"+e)
	}finally{
		console.log("无论怎样都会执行！！！")
	}
}
captureErr(0)