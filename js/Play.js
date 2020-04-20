//let scenes={};
var currentPlay;

var timeDelays={};

document.addEventListener('keypress', keyPressed);

function keyPressed(e) {
	if(e.key=="s"){
		skip();
	}
  //console.log(e)
}



function skip(){

	// let promise = new Promise(function(resolve, reject) {
	//   // executor (the producing code, "singer")
	// });
	premature()
	//why do i need a timeout????? the above is not asincrunus is it???
	setTimeout(stopAudio,10);
	
}

window.AudioContext = window.AudioContext||window.webkitAudioContext;

var context = new AudioContext();

function stopAudio(){
	context.close().then(function() {
		context=new AudioContext();
	});
}

var _setTimeout = window.setTimeout;
var timeouts = [];
window.setTimeout = function(fn, ms, premature) {
	
    var id = _setTimeout(fn, ms);
    //console.log(id);
    if(premature){
    	// console.log("ADDING  " + id);
    	// console.log(fn);
	    timeouts[id] = fn;
	}
	return id;
	
};

window.premature = function(id) {
	if(id==undefined){

		for(let id in timeouts){

			var fn = timeouts[id];

			
	        clearTimeout(id);
	        if (fn instanceof String) {
	            eval(fn);
	        } else {
	            fn()
	        }
		    
		    delete timeouts[id];
		}

	}else{
	    var fn = timeouts[id];
	    if (fn) {
	        clearTimeout(id);
	        if (fn instanceof String) {
	            eval(fn);
	        } else {
	            fn()
	        }
	    }
	}
};


function clearTimeOut(){
	for(let listenerID in timeDelays){
		console.log("REMOVING");
		console.log(listenerID);
		clearTimeout(timeDelays[listenerID]);
	}
}





function playStory(){
  
  
}
class Play{

	constructor(scenesData_){
		this.contentEditorOverlay=new ContentEditorOverlay();
		this.path="";//this will keep track of the path that has been taken
	}
}



Play.prototype.loadScenesLib=function(scenesData_){
	this.scenesLib={};
  	for(let i=0; i<scenesData_.length;i++){//think about the order of loading. right now to goes through scene by scene maybe load all scens first and then do content
  		this.scenesLib[scenesData_[i].id]=new Scene(scenesData_[i], this)
  	}

  	for(let i=0; i<scenesData_.length;i++){//think about the order of loading. right now to goes through scene by scene maybe load all scens first and then do content
  		this.scenesLib[scenesData_[i].id].addContents(scenesData_[i]);
  	}
  	//add universal content to every scene
  	if(this.scenesLib["uni"] != undefined){
  		for(let sceneID in this.scenesLib){
  			if(sceneID != "uni"){

  				for(let contentID in this.scenesLib["uni"].contentsLib){
  					
  					this.scenesLib[sceneID].contentsLib[contentID] = this.scenesLib["uni"].contentsLib[contentID]
  				}
  				//console.log(this.scenesLib[sceneID])
  			}
  		}
  		//console.log("*************************")
  	}

  	for(let i=0; i<scenesData_.length;i++){//think about the order of loading. right now to goes through scene by scene maybe load all scens first and then do content
  		this.scenesLib[scenesData_[i].id].addActions(scenesData_[i])
  	}

}


Play.prototype.createScenesFrontEndHTMLs=function(){
	for(let sceneKey in this.scenesLib){//this will create the divs for all the scenes. they could be created on each scene load
		this.scenesLib[sceneKey].createFrontEndHTML();//scene will cycle through each content (and action?) and create a div/span for each
	}
}
Play.prototype.createScenesBackEndHTMLs=function(){
	for(let sceneKey in this.scenesLib){//this will create the divs for all the scenes. they could be created on each scene load
		this.scenesLib[sceneKey].createBackEndHTML();//scene will cycle through each content (and action?) and create a div/span for each
	}
}
Play.prototype.createProperties=function(){
	for(let sceneKey in this.scenesLib){//this will create the divs for all the scenes. they could be created on each scene load
		this.scenesLib[sceneKey].createProperties();//scene will cycle through each content (and action?) and create a div/span for each
	}
}
Play.prototype.applyProperties=function(){
	for(let sceneKey in this.scenesLib){//this will create the divs for all the scenes. they could be created on each scene load
		this.scenesLib[sceneKey].applyProperties();//scene will cycle through each content (and action?) and create a div/span for each
	}
}


Play.prototype.displayCurrentScene=function(){
	this.currentScene.displayFrontEnd();
}



//loads the new scene and tracks path (maybe just use this to start and track elseware?)
Play.prototype.newScene=function(newScene_, inheritedContent_){
	// console.log(newScene_)
	if(newScene_ instanceof Scene){
		// console.log(inheritedContent_)
		newScene_.addInheritance(inheritedContent_)
		this.currentScene=newScene_;
		this.path=this.path+"."+newScene_.id;

		this.displayCurrentScene();
	}else if(typeof(newScene_) == "string"){
		this.newScene(this.scenesLib[newScene_])
	}
}

Play.prototype.getJSON=function(){
// {
//   "scenes":[]

// }
	let jsonPlay={}
	
	jsonPlay.scenes=[];
	let index=0;
	for(let id in this.scenesLib){
	 	jsonPlay.scenes[index]=this.scenesLib[id].getJSON()
	 	index++;
	}

	return jsonPlay;

}
Play.prototype.saveJSON=function(){
	//(content, fileName, contentType) {
    download( JSON.stringify(this.getJSON()),"scenes_" + Date.now() + ".json"); 
}






function changeMainTextLocationLeft(left_){
	document.getElementById("main_text").style.left = left_+"px";
}
function changeMainTextLocationTop(top_){
	document.getElementById("main_text").style.top = top_+"px";
}
function changeMainTextLocation(left_,top_){
	
	document.getElementById("main_text").style.left = left_+"px";
	document.getElementById("main_text").style.top = top_+"px";
}

function clearMainText(){
	document.getElementById("main_text").innerHTML = "";
}



// let d = new Date();
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>";




fetch("json/scenes.json")
	.then(function(resp){
		return resp.json();
	}).catch(function(resp){
		console.log("error while loading json ")
		console.log(resp)
	}).then(function(data){
		//console.log(data.scenes)
		currentPlay = new Play(data.scenes);//start reading from first scene

		currentPlay.loadScenesLib(data.scenes);//one or the other
		currentPlay.createScenesFrontEndHTMLs();

		//when do we create the back end effects????
		// currentPlay.createScenesBackEndHTMLs();
		// 
		// currentPlay.applyProperties();
		

		window.onload=function(){

			console.log("window loaded")
			//currentPlay.createProperties();
			currentPlay.newScene('aa');

			currentPlay.windowManager=new WindowManager();

			currentPlay.windowManager.createMainButtons();

			currentPlay.windowManager.toggleStoryBackEndButtons('backEnd');
		}

		
		

		

	}).catch(function(resp){
		console.log("error while loading scene")
		console.log(resp)
	}).then(function(data){
		
		// console.log(currentPlay)
		//currentPlay.start();
		// reading.start();
	}).catch(function(resp){
		console.log("error while starting play")
		console.log(resp)
	})


// function draw (filteredData_){
//   // Set up the canvas
//   const canvas = document.createElement("CANVAS");
//   const dpr = window.devicePixelRatio || 1;
//   const padding = 20;
//   canvas.width = canvas.offsetWidth * dpr;
//   canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
//   const ctx = canvas.getContext("2d");
//   ctx.scale(dpr, dpr);
//   //ctx.translate(0, canvas.offsetHeight / 2 + padding); // Set Y = 0 to be in the middle of the canvas

// };

const drawLineSegment = (ctx, x, y, width, isEven) => {
  ctx.lineWidth = 1; // how thick the line is
  ctx.strokeStyle = "#fff"; // what color our line is
  ctx.beginPath();
  y = isEven ? y : -y;
  ctx.moveTo(x, 0);
  ctx.lineTo(x, y);
  ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
  ctx.lineTo(x + width, 0);
  ctx.stroke();
};

var mouseDown = false;
document.onload = function(){

	document.body.onmousedown = function() { 
	    mouseDown = true;
	}
	document.body.onmouseup = function() {
	    mouseDown = false;
	}
}