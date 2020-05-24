var pageLoaded=false;

var mouseDown = false;

var backEnd;




var loadScreen

window.onload=function(){
	// currentStory.windowManager.addFullScreen();
	// currentStory.windowManager.addPlayPauseButton();
	//updateContentSize()

	currentStory = new Story();//start reading from first scene
		
	currentStory.windowManager=new WindowManager();
	pageLoaded=true;
	if(dataLoaded){//if the data is already loaded

		// console.log(window.onload.data)
		currentStory.loadScenesLib(window.onload.data.scenes);//one or the other
		
		currentStory.createScenesFrontEndHTMLs();
	}
};




function handler(e){
	    //e.stopPropagation();
	   e.preventDefault();
	}

window.addEventListener('resize', updateContentSize);





