function updateContentSize(){
	
	let contentDiv=document.getElementById("content");

	let width;
	let height;

	if(window.innerWidth/16<=window.innerHeight/9){//scale based on width

		 width=window.innerWidth;
		 height=(window.innerWidth*9/16)
	}else{//scale based on hieght
		 width=(window.innerHeight*16/9);
		 height=(window.innerHeight);
	}

	document.getElementById("content").style.width=width+'px';
	document.getElementById("content").style.height=height+'px';

	document.getElementById("content").style.top=(window.innerHeight-height)/2+'px';
	document.getElementById("content").style.left=0+'px';

	document.getElementById("bottom_bar").style.height=height*.05+'px';
	document.getElementById("bottom_bar").style.display='block';
	//currentStory.windowManager.playPause.style['padding-top']=height*.01+'px';
	currentStory.windowManager.playPause.style['padding-left']=width*.5+'px';
	currentStory.windowManager.playPause.style['padding-top']=height*.01+'px';

	currentStory.windowManager.playPause.style.height=height*.03+'px';
	currentStory.windowManager.playPause.style.width=height*.03+'px';



	currentStory.windowManager.fullScreenButton.style['padding-left']=width*.5+'px';
	currentStory.windowManager.fullScreenButton.style['padding-top']=height*.01+'px';
	
	currentStory.windowManager.fullScreenButton.style.height=height*.03+'px';
	currentStory.windowManager.fullScreenButton.style.width=height*.03+'px';

	//currentStory.windowManager.playPause.style.width=height*.03+'px';



	document.getElementById("main_text").style['font-size']=window.innerWidth*.02+'px';

}