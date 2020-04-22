
class ReplaceImageEffect extends ImageEffect{
	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);

		//so that it loads
		this.replacmentImage=document.createElement("img");
		this.replacmentImage.src=this.vareables['url'];

		this.random=Math.random();

		
		//this.oldImage=this.parentContent.html.fe;


		// this.replacmentImage.style["position"]=this.oldImage.style["position"];
		// this.replacmentImage.style["top"]=this.oldImage.style["top"];
		// this.replacmentImage.style["left"]=this.oldImage.style["left"];
		// this.replacmentImage.style["right"]=this.oldImage.style["right"];
		// this.replacmentImage.style["bottom"]=this.oldImage.style["bottom"];
		// this.replacmentImage.style["width"]=this.oldImage.style["width"];
		// this.replacmentImage.style["height"]=this.oldImage.style["height"];
		
		// img.style.width=iconWidth+'px';
		// img.style.height=iconHeight+'px';
		// this.html.be.divIcon.appendChild(img);
		//this.url;
	}
	apply(){


		this.oldImageURL=this.parentContent.html.fe.src;//=this.content.value;


		this.parentContent.html.fe.src=this.vareables['url'];
		

	}
	remove(){
		
		this.parentContent.html.fe.src=this.oldImageURL;
	}
}