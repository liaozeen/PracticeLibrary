
var button = document.getElementById("addButton");
button.onclick =handleButtonClick;
loadPlaylist();

function handleButtonClick(){
	var songName = document.getElementById("songTextInput").value;
	if(songName === ''){
		alert('请输入歌名');
	}else{
		var li = document.createElement("li");
		li.innerHTML = songName;

		var ul = document.getElementById('playlist');
		ul.appendChild(li);
		save(songName);
	}

}