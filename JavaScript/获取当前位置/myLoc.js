window.onload = getMyLocation;

function getMyLocation(){
	//检查浏览器是否支持地理定位API
	if(navigator.geolocation){
		//getCurrentPosition方法获取浏览器的位置，并调用displayLocation函数
		//同时传入position对象到displayLocation函数里
		navigator.geolocation.getCurrentPosition(displayLocation,displayError);
	}else{
		alert('浏览器不支持地理定位！');
	}
}

function displayLocation(position){
	//从position.coords对象得到位置的纬度和经度
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var div = document.getElementById('location');
	div.innerHTML = "你的位置在: 纬度：" + latitude + "，经度：" + longitude;
}

//错误处理程序。传入error对象
function displayError(error){
	console.log(error);
	var errorTypes = {
		0:"未知错误",
		1:"用户拒绝位置请求",
		2:"位置不可用",
		3:"请求超时"
	};

	var errorMessage = errorTypes[error.code];
	if(error.code == 0 || error.code == 2){
		errorMessage = errorMessage + " " + error.message;
	}

	var div = document.getElementById("location");
	div.innerHTML = "错误提示："+errorMessage;
}