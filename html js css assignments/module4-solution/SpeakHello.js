(function (window) {  //Start of IIFE
	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);  //End of IIFE