
class GlowImageEffect extends ImageEffect{
	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
	}
	apply(){
		// console.log("applying glow image effect with class " + this.vareables.className)
		this.parentContent.html.fe.classList.add(this.vareables.className)
	}
	remove(){
		this.parentContent.html.fe.classList.remove(this.vareables.className)
	}
}