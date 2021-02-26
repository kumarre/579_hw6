// Used the Howler audio library to play music
// Used it to play and pause music and update the progress bar

//Used FontAwesome to create a play and pause button instead of using images

Howler.autoUnlock = false;

const music = new Howl({
	src: ["rick.mp3"],
	onplay: function () {
		requestAnimationFrame(step.bind(this));
	}.bind(this),
});
let seek = music.seek();
let started = false;



//Play music
function playAudio() {
	if (pButton.className === "play") {
		music.play();
		pButton.className = "";
		pButton.className = "pause";
		playPause.className = "fas fa-pause-circle";
		rickRoll();
	}
	else {
		music.pause();
		pButton.className = "";
		pButton.className = "play";
		playPause.className = "fas fa-play-circle";
		started = true;
	}
}

//Switch album and album info after first click
function rickRoll() {
	if (!started) {
		album.className = "";
		album.className = "rick";
	
		song.innerHTML = "Never Gonna Give You Up";
	
		artist.innerHTML = "Rick Astley";
	
		let paragraph = document.createElement("p");
		paragraph.innerHTML = "You've been Rick Rolled :)";
		document.getElementsByTagName("h1")[0].appendChild(paragraph);
	}
}

function step() {
	let self = this;
	
	playhead.style.marginLeft = ((seek / music.duration()) * 100) + '%';
 

	let playheadStyle = window.getComputedStyle(document.getElementById("playhead"));
 	let p = playheadStyle.getPropertyValue('margin-left');
 	currentProgress.style.width = p;

	// If the sound is still playing, continue stepping.
	if (music.playing()) {
	  requestAnimationFrame(self.step.bind(self));
	}
 
}

playPause.addEventListener("click", playAudio);
