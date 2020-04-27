
class OpacityImageEffect extends ImageEffect{
	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
		this.opacity=JSON_.opacity;
	}
	apply(){
		this.parentContent.html.fe.style.opacity=this.vareables.opacity;
	}
	remove(){
		this.parentContent.html.fe.style.opacity=1;
		//this.parentContent.html.fe.classList.remove(this.vareables.className)
	}
}