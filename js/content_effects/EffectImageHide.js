class HideImageEffect extends TextEffect{

	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);

	}

	apply(){
		this.parentContent.html.fe.style.display="none";//="hidden";
	}
}