class PositionImageEffect extends ImageEffect{
	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
	}
	apply(){
		if(this.vareables.type == "background"){

			this.parentContent.htmlParent=document.getElementById("background_img");

		}else if(this.vareables.type == "absolute"){
			this.parentContent.html.fe.style.position="absolute";
			// console.log(this.effects.general.position.vareables.top+"px")

			// console.log(this.html.fe.clientWidth)

			this.parentContent.html.fe.style.top=this.vareables.top;
			this.parentContent.html.fe.style.left=this.vareables.left;
			this.parentContent.html.fe.style.width=(this.parentContent.html.fe.naturalWidth / 1920)*100 + "%";

			// this.parentContent.html.fe.classList.add("glow-gif")

			this.parentContent.htmlParent=document.getElementById("content")

			// this.html.fe.style['box-shadow'] = "20px 20px 40px 40px #ff0000";



			//console.log(this.html.fe.naturalWidth)

			//document.getElementById("content").append(this.html.fe);

			//console.log(this.html.fe.naturalWidth)
		}
	}
}