var backEnd;



document.onload = function(){
	console.log("page loaded")

	backEnd=backEndDisplay();
 	
	document.getElementById("go_to_scene_veiw").addEventListener("click", function(){backEndDisplay()
		});
	document.addEventListener("click",handler,true);
};

function handler(e){
	    //e.stopPropagation();
	   e.preventDefault();
	}