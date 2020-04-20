let audioRepo={};
//audioRepo.audioBuffer

class AudioContent extends Content{


	constructor(contentJson_,parentScene_){ //,url_, content_, propertiesJSON_

		super(contentJson_,parentScene_)
		this.loadAudio(this.content.value); //creates and loads the audioBuffer object
	
	}

	displayFrontEndHTML(){
		//this.applyProperties();
		this.playSound();
	}


	getCurrentPlayTime(){
		let playTime=context.currentTime-this.source.startingContextTime + this.source.startingPosition; //also needs an offset
		return playTime;
	}

	loadAudio(url_){

		if(audioRepo[url_]==undefined){
			audioRepo[url_]={};
			audioRepo[url_]['status'] = "loading";
			audioRepo[url_]['contentObjects'] = [];
			audioRepo[url_]['contentObjects'].push(this);
			audioRepo[url_]['audioBuffer'] = null;


			var request = new XMLHttpRequest();
			request.open('GET', url_, true);
			request.responseType = 'arraybuffer';

			request.audioContent=this;

			// Decode asynchronously
			request.onload = function() {

			   	context.decodeAudioData(request.response, function(buffer_) {
			    	buffer_.url=url_;
			    	console.log(url_)
			    	this.audioContent.audioBuffer=buffer_;

			    	audioRepo[url_]['audioBuffer']=buffer_;

			    	audioRepo[url_]['status'] = "loaded";
			    	for(let i in audioRepo[url_]['contentObjects']){
			    		audioRepo[url_]['contentObjects'][i].audioBuffer=audioRepo[url_]['audioBuffer'];
			    		audioRepo[url_]['contentObjects'][i].createEffects();
			    		audioRepo[url_]['contentObjects'][i].applyGeneralEffects();
			    	}



			    	// this.audioContent.createEffects();
			    	// this.audioContent.applyGeneralEffects();
			    	//console.log(this.audioHandler)
			    }.bind(this), onLoadError);
			}
			request.send();

		}
		else if(audioRepo[url_]['status'] == "loading"){
			audioRepo[url_]['contentObjects'].push(this);
		}else if(audioRepo[url_]['status'] == "loaded"){

			this.audioBuffer=audioRepo[url_]['audioBuffer'];
			this.createEffects();
			this.applyGeneralEffects();
		}
			

		

		// var request = new XMLHttpRequest();
		// request.open('GET', url_, true);
		// request.responseType = 'arraybuffer';

		// request.audioContent=this;

		// // Decode asynchronously
		// request.onload = function() {
		//    	context.decodeAudioData(request.response, function(buffer_) {
		//     	buffer_.url=url_;
		//     	this.audioContent.audioBuffer=buffer_;
		//     	// this.audioContent.start=0;
		//     	// this.audioContent.duration=buffer_.duration;
		//     	this.audioContent.createEffects();
		//     	this.audioContent.applyGeneralEffects();
		//     	//console.log(this.audioHandler)
		//     }.bind(this), onLoadError);
		// }
		// request.send();
		//}
		//}
	}



	createBackEndHTML(){
		super.createBackEndHTML();
	}
	getAmplitudes(samples_){ //,startPosition_,duration_) {
		const rawData = this.audioBuffer.getChannelData(0); // We only need to work with one channel of data
		const samples = samples_; // Number of samples we want to have in our final data set
		const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
		const filteredData = [];
		for (let i = 0; i < samples; i++) {
			let blockStart = blockSize * i; // the location of the first sample in the block
			let sum = 0;
			for (let j = 0; j < blockSize; j++) {
			  sum = sum + Math.abs(rawData[blockStart + j]) // find the sum of all the samples in the block
			}
			filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
		}
		return filteredData;
	}

	updateIconContent(){
		// let iconWidth=100;
		// let iconHeight=75;

	
		this.html.be.divIcon.innerHTML=this.content.value;
		

		// if(this.properties["clipping"]!=undefined){
			this.html.be.divIcon.style.height=this.duration * 100 + "px";
		// }else{
		// 	this.html.be.divIcon.style.height=this.duration * 100 + "px";
		// }
		
		this.html.be.divIcon.style.width=30 + "px";

		this.updateAudioDisplay();

		this.html.be.divIcon.appendChild(this.audioDisplay.getCanvaseWrap());
					
		
	}


	playSound(){
		if (context.state === 'suspended') {
	        context.resume();
	    }
	    this.play(this.start,this.duration)

		// if(this.properties["clipping"] != undefined){
		// 	//console.log(this.properties["clipping"].vareables)
	    	
	 //    }
			
	}
	play(startPosition_,duration_) {
		
		//console.log("playSound")
		//let audio = audio_
		// console.log(startPosition_)

		if(startPosition_==null){
			startPosition_=0;
		}
		this.source = context.createBufferSource(); // creates a sound source

		// this.analizer=context.createAnalyser()
		this.source.buffer = this.audioBuffer;                    // tell the source which sound to play
		this.source.startingContextTime=context.currentTime;//add a startig time for time keeping
		this.source.startingPosition=startPosition_;//add a startig time for time keeping

	 
	 	this.isPlaying=true;

	 	this.source.playbackRate.value = 1;


		this.source.connect(context.destination);       // connect the source to the context's destination (the speakers)


	 	
	 	this.source.start(context.currentTime,startPosition_,duration_);                           // play the source now
	                                           // note: on older systems, may have to use deprecated noteOn(time);

	    this.source.onended=function(event_){
	 		this.isPlaying=false;
		}.bind(this);
	}

	updateAudioDisplay(){ 
		if(this.audioDisplay==undefined){
			this.addAudioDisplay();
		}
		this.audioDisplay.draw(this.start,this.duration)
	}

	addAudioDisplay(){ 
		this.audioDisplay=new AudioDisplay(this);
	}

	applyGeneralEffects(){
		for(let effect in this.effects.general){
			this.effects.general[effect].apply();
		}
		
	}

	createEffects(){
		// console.log(this.JSONData)
		// console.log("**********************************************************************")
		// console.log(this.JSONData)
		for(let effect in this.JSONData.effects.general){
			// console.log(effect)
			if(effect=="clipping"){
				this.effects.general[effect]=new ClippingAudioEffect(this.JSONData.effects.general[effect],this)
			}else{
				this.effects.general[effect]=new ContentEffect(this.JSONData.effects.general[effect],this)
			}
		}
	
		
	}
	

	// createEffects(){
	// 	//console.log(this)
	// 	for(let effect in this.JSONData.effects){
	// 		if(propertyType=="clipping")
	// 		{

	// 			this.properties[propertyType]=new ClippingAudioProperty(this.JSONData.properties[propertyType],this)
	// 		}else{
	// 			this.properties[propertyType]=new AudioProperty(this.JSONData.properties[propertyType],this)
	// 		}
			
	// 	}
	// }
}



function onLoadError(error_){
	console.log("error loading audio " + error_)
}	












function AudioDisplay(audioContent_){
	//AudioObjectHandler.prototype.audioDisplay=function(startPosition_,duration_) {
	this.audioContent=audioContent_;
	this.scale=100;		// pixels/second
	//this.currentPlayTime=30;
	console.log(this.audioContent)
	this.duration=this.audioContent.audioBuffer.duration;
	this.numSamples=this.duration*this.scale;
	this.amplitudes=this.audioContent.getAmplitudes(this.numSamples);
	
	this.html={};

	this.html.canvasWrap = document.createElement("div");
	this.html.canvasWrap.classList.add("canvas-wrap")
	this.html.canvas = document.createElement("CANVAS");

	const dpr = window.devicePixelRatio || 1;
	//const padding = 20;
	this.html.canvas.width = 320;
	this.html.canvas.height = this.duration * this.scale;
	this.html.ctx = this.html.canvas.getContext("2d");
	//this.html.ctx.scale(dpr, dpr);

	this.html.ctx.lineWidth = 1; // how thick the line is
	
	

	//this.draw(5,6)

	
	
	

	// this.html.ctx.moveTo(0, 10);
	// this.html.ctx.lineTo(10,10);
	// this.html.ctx.strokeStyle = "black";
	// this.html.ctx.stroke();		

	// this.html.ctx.strokeStyle = "#0000ff";// what color our line is	
	// this.html.ctx.beginPath();
	// this.html.ctx.moveTo(10, this.currentPlayTime*100);
	// this.html.ctx.lineTo(400, this.currentPlayTime*100);
	// this.html.ctx.stroke();		



	this.html.playBar=document.createElement("div");
	this.html.playBar.style.height="5px";
	this.html.playBar.style.width="500px";
	this.html.playBar.style['background-color']="green";
	this.html.playBar.style.position = 'absolute';
	this.html.playBar.style.left="0px";
	this.html.playBar.style.top="-50px";

	this.html.canvasWrap.appendChild(this.html.canvas);

	this.html.canvasWrap.appendChild(this.html.playBar);



					
	this.getCanvaseWrap=function(){
		console.log(this.html.canvasWrap)
		return this.html.canvasWrap;

	}

}

AudioDisplay.prototype.continuousUpdatePlayBar=function(){


	//console.log(this)
	this.updatePlayPosition();

	//document.getElementById(chr).scrollIntoView(true);
	//console.log(this.audioContent)
	if(this.audioContent.isPlaying){
		setTimeout(this.continuousUpdatePlayBar.bind(this), 6);
	}
	
}


AudioDisplay.prototype.draw = function(start_,duration_){

	let indent=100;

	this.html.ctx.clearRect(0, 0, this.html.canvas.width, this.html.canvas.height);

	//axis line
	this.html.ctx.strokeStyle = "#000000";// what color our line is	
	this.html.ctx.beginPath();
	this.html.ctx.moveTo(indent, 0);
	this.html.ctx.lineTo(indent, this.html.canvas.height);
	this.html.ctx.stroke();								


	this.html.ctx.font = "20px century_gothicregular";
	this.html.ctx.textAlign = "end";
	this.html.ctx.textBaseline = "middle";
	this.html.ctx.fillStyle = "#333";// what color our line is	

	//axis numbers
	for(let i=0;i<this.amplitudes.length;i+=100){
		this.html.ctx.fillText(i/this.scale + "  -", indent, i);
	}
	
	for(let i=0;i<this.amplitudes.length;i++){
		

		if( i/100<start_ || i/100>start_+duration_){
			this.html.ctx.strokeStyle = "#0000ff";// what color our line is	
		}else{
			this.html.ctx.strokeStyle = "#000000";// what color our line is	
		}																			
https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/
		this.html.ctx.beginPath();
		this.html.ctx.moveTo(indent, i);
		this.html.ctx.lineTo(indent + this.amplitudes[i]*800, i);
		this.html.ctx.stroke();
	}

	this.html.ctx.beginPath();
	this.html.ctx.moveTo(0, 2578);
	this.html.ctx.lineTo(600, 2578);
	this.html.ctx.stroke();
}

AudioDisplay.prototype.updatePlayPosition = function(){
	//console.log(this.audio)
	console.log(mouseDown)
	let scrollToEasing
	if(mouseDown==false){
		this.html.playBar.style.top=this.audioContent.getCurrentPlayTime()*100 + "px";
		//this.html.playBar.scrollIntoView(false);
		//console.log(this.audioContent.content.contentEditorModual.html.viewport.style)


		//this.audioContent.content.contentEditorModual.html.viewport.scrollTo(0,this.html.playBar.offsetTop - 50)
		//console.log(this.audioContent.content.contentEditorModual.html.viewport.scrollTop)
		let easing=.1;

		console.log(this)

		scrollToEasing = this.audioContent.contentEditorModual.html.viewport.scrollTop + ((this.html.playBar.offsetTop-400) - this.audioContent.contentEditorModual.html.viewport.scrollTop)*easing;
		//let scrollToEasing = this.audioContent.content.contentEditorModual.html.viewport.scrollTop + ((this.html.playBar.offsetTop - 400) - this.audioObjectHandler.content.contentEditorModual.html.viewport.scrollTop)*easing;
		
		//console.log(scrollToEasing)
	}

	this.audioContent.contentEditorModual.html.viewport.scrollTo(0, scrollToEasing);


}

















