class WindowManager{
	constructor(){
		// this.sceneModual={};
		// this.activeModual;

		this.html={};
		this.html.topBar=document.getElementById('top-bar');
		this.html.content=document.getElementById('content');
		this.html.bottomBar=document.getElementById("bottom_bar");

		this.addFullScreen();
		this.addPlayPauseButton();
		//this.createSceneModual();
		this.createTopButtons();
	}
	
	createMainButtons(){
		this.createGoToBackEndButton();
		this.createBackToStoryButton();
	}
	createTopButtons(){
		//if scense modual
		// this.sceneModual.createTopButtons();
	}

	addPlayPauseButton(){

		this.playPause= document.createElement("img");

		this.playPause.id="play-pause";

		this.playPause.srcPause="img/special/pause.png";

		this.playPause.srcPlay="img/special/play.png";
		
		this.playPause.src=this.playPause.srcPause;

		// this.playPause.altSrc="img/special/play.png";

		document.getElementById("bottom_bar").append(this.playPause);
		

		this.playPause.addEventListener('click',function(){

			this.togglePlayPause();
		}.bind(this))
	}

	togglePlayPause(){
		currentStory.togglePlayPause();
		//console.log(currentStory.playing)
		

		// currentStory.togglePlayPause();
		// let srcTemp = currentStory.windowManager.playPause.src;
		// currentStory.windowManager.playPause.src = currentStory.windowManager.playPause.altSrc;
		// currentStory.windowManager.playPause.altSrc = srcTemp;
	}
	updatePlayPauseButton(){
		if(currentStory.playing==false){
			this.playPause.src=this.playPause.srcPlay;

			//console.log(this.playPause.src)
		}else{
			this.playPause.src=this.playPause.srcPause;
		}
	}


	addFullScreen(){
		//console.log("*************************************************************")
		
		// this.fullScreenButton= document.createElementNS("http://www.w3.org/2000/svg", "svg");
		this.fullScreenButton= document.createElement("img");
		// console.log(this.fullScreenButton)
		this.fullScreenButton.id="fullScreenButton";
		// this.fullScreenButton.style.width="60px";
		// this.fullScreenButton.style.height="60";
		//console.log(fullScreenSVG(20,20,2))
		this.fullScreenButton.src="img/special/fullScreen.png"

		//this.fullScreenButton.id="fullScreenButton";

		document.getElementById("bottom_bar").append(this.fullScreenButton);
		
		// this.fullScreenButton.innerHTML=fullScreenSVG(25,22,6);
		// this.html.bottomBar.append(this.fullScreenButton)
		// this.fullScreenButton.id="svgFullScreen"
		// this.fullScreenButton.style.top=5;
		// this.fullScreenButton.style.right=5;
		// this.fullScreenButton.style.position="absolute";

		this.fullScreenButton.addEventListener('click',function(){
			toggleFullscreen();
		}.bind(this))
	}

	toggleStoryBackEndButtons(button_){
		if(button_=="backEnd"){
			this.showBackEndButton()
			this.showStoryButton(false)
		}else if(button_=="story"){
			this.showBackEndButton(false)
			this.showStoryButton()
		}
	}

	//this.activeModual
	
	

	

	clearContent(){
		this.html.content.innerHTML = "";
	}
	clearTopBar(){
		this.html.topBar.innerHTML="";
	}


	showBackEndButton(conditional_){
		this.showButton(this.html.goToBackEndButton,conditional_);
	}
	showStoryButton(conditional_){
		this.showButton(this.html.backToStoryButton,conditional_);
	}
	showButton(button_,conditional_){
		if(conditional_==false){
			button_.style.display="none";

		}else{
			button_.style.display='block';
			
		}
	}

	createGoToBackEndButton(){
		this.html.goToBackEndButton = document.createElement("BUTTON");
		
		
		this.html.goToBackEndButton.innerHTML = "BACK END >";


		this.html.goToBackEndButton.style.display="none";
		this.html.topBar.append(this.html.goToBackEndButton);

		this.html.goToBackEndButton.backEndObject=this;
		this.html.goToBackEndButton.addEventListener ("click", function(event_) {
			console.log(event_.target.backEndObject)

			event_.target.backEndObject.display();

		});
	}

	createBackToStoryButton(){
		this.html.backToStoryButton = document.createElement("BUTTON");
		
		
		this.html.backToStoryButton.innerHTML = "< BACK TO STORY";
		this.html.backToStoryButton.style.display="none";
		this.html.topBar.append(this.html.backToStoryButton);
		this.html.backToStoryButton.backEndObject=this;
		this.html.backToStoryButton.addEventListener ("click", function(event_) {
		   //remove back end display then
		   event.target.backEndObject.toggleStoryBackEndButtons("backEnd")
			//alert("go back to story");
		   	//might need to be revised if path is imprtant
		   
		   resetContentDiv();
		   currentStory.newScene('aa')
		   //displayScene(currentStory.scenes[id])
		});

	}


}

WindowManager.prototype.display=function(){
	this.html.topBar.append(this.sceneModual.getTopButtons())
	this.toggleStoryBackEndButtons("story")
}
function resetContentDiv(){
	document.getElementById('content').innerHTML = "<div id='background_img' style='position:absolute; z-index:-10;' alt='background image'></div>	  	<div id='main_text' style='position:absolute; z-index:0;' alt='text'> </div>";

}



function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}


var mouseIsPressed=false;
document.onmousedown=function(){
	mouseIsPressed=true;
}
document.onmouseup=function(){
	mouseIsPressed=false;
}


function isFullscreen(){ return 1 >= outerHeight - innerHeight };


function toggleFullscreen() {
  let elem = document.documentElement

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}






