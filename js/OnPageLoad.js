var backEnd;

function updateContentSize(){
	
	let contentDiv=document.getElementById("content");

	if(window.innerWidth/16<=window.innerHeight/9){//scale based on width

		let width=window.innerWidth;
		let height=(window.innerWidth*9/16)

		document.getElementById("content").style.width=width+'px';
		document.getElementById("content").style.height=height+'px';

		document.getElementById("content").style.top=(window.innerHeight-height)/2+'px';
		document.getElementById("content").style.left=0+'px';

		document.getElementById("bottom_bar").style.height=height*.05+'px';


		document.getElementById("main_text").style['font-size']=window.innerWidth*.02+'px';


		
	}else{//scale based on hieght
		let width=(window.innerHeight*16/9);
		let height=(window.innerHeight);

		document.getElementById("content").style.width=width+'px';
		document.getElementById("content").style.height=height+'px';


		document.getElementById("content").style.top=0+'px';
		document.getElementById("content").style.left=(window.innerWidth-width)/2+'px';

		document.getElementById("bottom_bar").style.height=height*.05+'px';

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



