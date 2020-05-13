var loadScreen;
class LoadScreen{

	constructor(){
		this.numAudioFiles=0;
		this.loadedAudioFiles=0;
		this.html={};
		this.createDivs();
		this.show();

		this.loaded=0;
		this.easedLoaded=0;
		this.easing=.005;

		this.updateInterval=setInterval(this.draw.bind(this),60/1000);
	}

	createDivs(){
		this.html.loadDisplay = document.createElement("div");
		this.html.loadBar = document.createElement("div");
		this.html.loadDisplay.append(this.html.loadBar);

		this.html.loadDisplay.style.height="50px";
		this.html.loadDisplay.style.width="1000px";

		this.html.loadBar.style.height="100%";
		this.html.loadDisplay.style['background-color']="gray";
		this.html.loadBar.style['background-color']="red";



	}

	show(){
		currentStory.windowManager.html.content.appendChild(this.html.loadDisplay);
	}
	hide(){
		clearInterval(this.updateInterval);
		currentStory.windowManager.html.content.removeChild(this.html.loadDisplay);
	}

	update(){
		if(this.numAudioFiles > 0){
			this.loaded = (this.loadedAudioFiles/this.numAudioFiles*100) 
			//console.log((this.loadedAudioFiles/this.numAudioFiles*100));
		}
	}
	draw(){
		this.easedLoaded+=(this.loaded-this.easedLoaded)*this.easing;
		this.html.loadBar.style.width=this.easedLoaded+"%";
		
	}


}