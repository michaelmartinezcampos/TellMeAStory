var backEnd;

function updateContentSize(){
	
	let contentDiv=document.getElementById("content");

	if(window.innerWidth/16<=window.innerHeight/9){

		document.getElementById("content").style.width=window.innerWidth+'px';
		document.getElementById("content").style.height=(window.innerWidth*9/16)+'px';


		document.getElementById("main_text").style['font-size']=window.innerWidth*.02+'px';
		
	}else{
		document.getElementById("content").style.width=(window.innerHeight*16/9)+'px';
		document.getElementById("content").style.height=(window.innerHeight)+'px';

		document.getElementById("main_text").style['font-size']=(window.innerHeight*16/9)*.02+'px';

	}


	

}


var pageLoaded=false;

document.onload = function(){
	console.log("page loaded**")
	pageLoaded=true;

	backEnd=backEndDisplay();

	updateContentSize();

	addFullScreen();
 	
	document.getElementById("go_to_scene_veiw").addEventListener("click", function(){backEndDisplay()
		});
	document.addEventListener("click",handler,true);
};

function handler(e){
	    //e.stopPropagation();
	   e.preventDefault();
	}

window.addEventListener('resize', updateContentSize);



