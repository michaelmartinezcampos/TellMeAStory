var backEnd;



document.onload = function(){
	console.log("page loaded")

	backEnd=backEndDisplay();

	addFullScreen();
 	
	document.getElementById("go_to_scene_veiw").addEventListener("click", function(){backEndDisplay()
		});
	document.addEventListener("click",handler,true);
};

function handler(e){
	    //e.stopPropagation();
	   e.preventDefault();
	}


function addFullScreen(){
	let bottomBar=document.getElementById("bottom_bar");
	let fullScreenButton= document.createElement("svg");
	fullScreenButton.style.width=24;
	fullScreenButton.style.height=24;
	console.log(fullScreenSVG(20,20,2))
	fullScreenButton.innerHTML=fullScreenSVG(20,20,2);
	bottomBar.append(fullScreenButton)
}
