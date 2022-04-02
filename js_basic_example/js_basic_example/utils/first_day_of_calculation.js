//获取本月第一天
function getFirstDayOfMonth(){
	var now = new Date();
	var day = now.setDate(1);

	return timeFormate(now);
}
//获取本季度第一天
function getFirstDayOfQuarter(){
	var now = new Date();
	var month = now.getMonth();
	if(month <3 ){
		now.setMonth(0);
	}else if(2 < month && month < 6){
		now.setMonth(3);
	}else if(5 < month && month < 9){
		now.setMonth(6);
	}else if(8 < month && month < 11){
		now.setMonth(9);
	}
	now.setDate(1);
	return timeFormate(now);
}
//获取当年第一天
function getFirstDayOfYear () {
	 let date = new Date()
	 date.setDate(1);
	 date.setMonth(0);
	 return timeFormate(date);
}

//时间格式化
function timeFormate(date){
	var year = date.getFullYear(); //年   
	var month = date.getMonth() + 1; //月   
	var day = date.getDate(); //日

	if (date.getMinutes() / 60 > 1) {
		hh += Math.floor(date.getMinutes()) / 60;
	}
	var clock = year + ".";
	if (month < 10)
		clock += "0";
	clock += month + ".";
	if (day < 10)
		clock += "0";
	clock += day + " ";
	return clock;
}
