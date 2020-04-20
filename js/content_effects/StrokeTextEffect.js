class StrokeTextEffect extends TextEffect{

	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
	}

	apply(){
		if(this.vareables.thickness != null && this.vareables.color != null){
			this.parentContent.html.fe.style['-webkit-text-stroke']=this.vareables.thickness + " " + this.vareables.color;
		}
	}
}