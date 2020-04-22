//var backEnd;
function WindowManager(){
	//is this a perperty of the backend object or of each scene?
	this.sceneModual={};
	this.activeModual;

	this.html={};

	this.html.topBar=document.getElementById('top-bar');
	this.html.content=document.getElementById('content');
	this.currentScene;

	this.addFullScreen();


	this.replaceContent=function(content_){
		this.html.content.innerHTML=""
		this.html.content.append(content_);
	}


	this.createSceneModual=function(){
		this.sceneModual=new BackEndSceneModual(currentPlay.scenesLib,this);
	}


	this.createMainButtons=function(){
		this.createGoToBackEndButton();
		this.createBackToStoryButton();
	}
	this.createTopButtons=function(){
		//if scense modual
		this.sceneModual.createTopButtons();
	}

	this.addFullScreen=function(){
		let bottomBar=document.getElementById("bottom_bar");
		let fullScreenButton= document.createElement("svg");
		fullScreenButton.style.width=24;
		fullScreenButton.style.height=24;
		console.log(fullScreenSVG(20,20,2))
		fullScreenButton.innerHTML=fullScreenSVG(20,20,2);
		bottomBar.append(fullScreenButton)
	}

	this.toggleStoryBackEndButtons=function(button_){
		if(button_=="backEnd"){
			this.showBackEndButton()
			this.showStoryButton(false)
		}else if(button_=="story"){
			this.showBackEndButton(false)
			this.showStoryButton()
		}
	}

	//this.activeModual
	
	this.createSceneModual();
	this.createTopButtons();

	

	this.clearContent=function(){
		this.html.content.innerHTML = "";
	}
	this.clearTopBar=function(){
		this.html.topBar.innerHTML="";
	}


	this.showBackEndButton=function(conditional_){
		this.showButton(this.html.goToBackEndButton,conditional_);
	}
	this.showStoryButton=function(conditional_){
		this.showButton(this.html.backToStoryButton,conditional_);
	}
	this.showButton=function(button_,conditional_){
		if(conditional_==false){
			button_.style.display="none";

		}else{
			button_.style.display='block';
			
		}
	}

	this.createGoToBackEndButton=function() {
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

	this.createBackToStoryButton=function(){
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
		   currentPlay.newScene('aa')
		   //displayScene(currentPlay.scenes[id])
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





