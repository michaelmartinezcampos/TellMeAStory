class LinkTextEffect extends TextEffect{

	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);
		console.log("make link effect!!!!!!!!!!!")
		
	}

	apply(){
		console.log("LINK ========" + this.parentContent.html.fe.innerText.link(this.vareables.src))
		this.parentContent.html.fe.innerHTML = this.parentContent.html.fe.innerText.link(this.vareables.src);

	}
}