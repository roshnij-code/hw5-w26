var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");

	video.autoplay = false;
	video.loop = false;

	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);

	document.getElementById("play").addEventListener("click", function() {
		console.log("Play Video");

		video.play();

		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});

	document.getElementById("pause").addEventListener("click", function() {
		console.log("Pause Video");

		video.pause();
	});

	document.getElementById("slower").addEventListener("click", function() {
		console.log("Slow Down");

		video.playbackRate *= 0.9;
		console.log("Speed is " + video.playbackRate);
	});

	document.getElementById("faster").addEventListener("click", function() {
		console.log("Speed Up");

		video.playbackRate /= 0.9;
		console.log("Speed is " + video.playbackRate);
	});

});
