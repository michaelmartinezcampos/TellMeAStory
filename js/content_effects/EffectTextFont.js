class FontTextEffect extends TextEffect{

	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
		
	}

	apply(){
		this.parentContent.html.fe.style['font-family']=this.vareables["font-family"];

	}
}