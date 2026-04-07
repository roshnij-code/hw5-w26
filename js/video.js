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

	document.getElementById("skip").addEventListener("click", function() {
		console.log("Skip Ahead");

		video.currentTime += 10;
		
		if (video.currentTime >= video.duration) {
			video.currentTime = 0;
		}
		
		console.log("Current location is " + video.currentTime);
	});

	document.getElementById("mute").addEventListener("click", function() {
		console.log("Mute/Unmute");

		if (video.muted) {
			video.muted = false;
			document.getElementById("mute").innerHTML = "Mute";
		} else {
			video.muted = true;
			document.getElementById("mute").innerHTML = "Unmute";
		}
	});

	document.getElementById("slider").addEventListener("input", function() {
		console.log("Volume Slider");

		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});
	
	document.getElementById("vintage").addEventListener("click", function() {
		console.log("Styled");

		video.classList.add("oldSchool");
	});

	document.getElementById("orig").addEventListener("click", function() {
		console.log("Original");

		video.classList.remove("oldSchool");
	});
});
