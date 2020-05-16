class PositionImageEffect extends ImageEffect{
	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
	}
	apply(){
		if(this.vareables.type == "background"){

			this.parentContent.htmlParent=document.getElementById("background_img");
			//this.parentContent.htmlParent.append(this.parentContent.html.fe);

		}else if(this.vareables.type == "absolute"){
			this.parentContent.html.fe.style.position="absolute";
			

			this.parentContent.html.fe.style.top=this.vareables.top;
			this.parentContent.html.fe.style.left=this.vareables.left;
			this.parentContent.html.fe.style.width=(this.parentContent.html.fe.naturalWidth / 1920)*100 + "%";


			this.parentContent.htmlParent=document.getElementById("content")
			//this.parentContent.htmlParent.append(this.parentContent.html.fe);

		}
	}
}