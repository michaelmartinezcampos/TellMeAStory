class ZIndexEffect extends ContentEffect{
	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
	}
	apply(){
		// console.log("applying glow image effect with class " + this.vareables.className)
		this.parentContent.html.fe.style["z-index"]=this.vareables.index
	}
}