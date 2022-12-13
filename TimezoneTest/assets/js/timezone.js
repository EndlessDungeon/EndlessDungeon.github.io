(function($) {
  "use strict";
  
  var initData = function(){
	let date = new Date();
	let dateUTC = new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()));
	let currentDate = "Date Now:"+new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
	let currentTimestamp = "Timestamp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+date.getTime();
	let currentUTCDate = "Date UTC:"+dateUTC;
	let currentUTCTimestamp = "UTC Timestamp:"+dateUTC.getTime();
	let offset = "Offset: "+(date.getTimezoneOffset()/60)+" Hour(s)";

	$("#container").html(currentDate+"<br/>"+currentUTCDate+"<br/>"+currentTimestamp+"<br/>"+currentUTCTimestamp+"<br/>"+offset);
  };
  
  initData();
})(jQuery);