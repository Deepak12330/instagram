var current_user = sessionStorage.getItem("users");
var video_box = document.getElementById("video_box");
var play_btn = document.getElementById("play_btn");



play_btn.onclick = function()
{
	if(video_box.paused)
	{
		video_box.play();
	}
	else
	{
		video_box.pause();
	}

}

var forward = document.getElementById("forward");
forward.onclick = function ()
{
    console.log(video_box.currentTime += 10);
}


var backward = document.getElementById("backward");
backward.onclick = function ()
{
    console.log(video_box.currentTime -= 10);
}


//progress bar coding


video_box.onloadedmetadata = function() {
    document.getElementById("range_input").max = Math.floor(video_box.duration);
};

video_box.ontimeupdate = function()
{
    var t_time = video_box.duration;
    var c_time = video_box.currentTime;

    var range = document.getElementById("range_input");
    var v_timing = document.getElementById("v_timing");

    // Progress bar update
    range.value = Math.floor(c_time);

    // Time format
    v_timing.innerHTML = formatTime(c_time) + " / " + formatTime(t_time);
};

function formatTime(seconds)
{
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds % 60);

    if(sec < 10){
        sec = "0" + sec;
    }

    return min + ":" + sec;
}




document.getElementById("close").onclick = function()
{
    document.getElementById("add_video").style.display = "none";
}



document.getElementById("plusIcon").onclick = function()
{
    document.getElementById("add_video").style.display = "block";
}


var add = document.getElementById("add");
add.onclick = function()
{
    var video_name = document.getElementById("c_name").value;
    var video_link = document.getElementById("c_number").value;

    if(video_name != "" && video_link != "")
    {
        var obj_data = {video:video_name,link:video_link};
        var text_data = JSON.stringify(obj_data);

        localStorage.setItem(current_user+"video",text_data);

        window.location.reload();
    }
    else
    {
        alert("pls filled");
    }



}

