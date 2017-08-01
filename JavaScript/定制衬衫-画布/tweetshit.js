window.onload = function(){
	var button = document.getElementById('previewButton');
	//为这个按钮增加一个点击处理程序，当被点击时调用previewHandler函数
	button.onclick = previewHandler;
};

function previewHandler(){
	//首先得到画布元素，并要求得到它的2d绘制上下文
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext('2d');
	//用白色覆盖之前绘制的内容
	fillBackgroundColor(canvas,context,"white");

	//查找选择了哪个元素
	var selectObj = document.getElementById('shape');
	//selectedIndex属性会返回下拉菜单中所选选项的编号
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	var selectColor = document.getElementById('backgroundColor')
	var colorindex = selectColor.selectedIndex;
	var bgColor = selectColor[colorindex].value;

	//画布背景颜色绘制
	if(bgColor === 'white'){
		fillBackgroundColor(canvas,context,"white");
	}else if(bgColor==='black'){
		fillBackgroundColor(canvas,context,"black");
	}

	//随机图案的形状绘制
	if(shape === 'squares'){
		for(var squares = 0;squares<20;squares++){
			drawSquare(canvas,context);
		}
	}else if(shape==='circles'){
		for(var circles = 0;circles<20;circles++){
			drawCircle(canvas,context);
		}
	}
}

//清除之前绘制的内容
function fillBackgroundColor(canvas,context,color){
	context.fillStyle = color;
	context.fillRect(0,0,canvas.width,canvas.height);
}

//画方块
function drawSquare(canvas,context){
	//限制方块的最大的宽度为40
	var w = Math.floor(Math.random()*40);
	//随机分配给方块x和y坐标
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);
	//为方块的颜色指定浅蓝色
	context.fillStyle = "lightblue";
	//绘制具体的方块
	context.fillRect(x,y,w,w);
}

//画圆形
function drawCircle(canvas,context){
	var radius = Math.floor(Math.random()*40);
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);
	//创建新的路径
	context.beginPath();
	//绘制圆形的路径
	context.arc(x,y,radius,0,degreesToRadians(360),true);

	//显示路径
	context.fillStyle = "lightblue";
	context.fill();
}

//度转化为弧度
function degreesToRadians(degrees){
	return (degrees*Math.PI)/180;
}

