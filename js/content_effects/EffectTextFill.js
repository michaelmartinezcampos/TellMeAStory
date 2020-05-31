class FillTextEffect extends TextEffect{

	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);

	}

	apply(){
		this.parentContent.html.fe.style.color=this.vareables.color;
	}
}