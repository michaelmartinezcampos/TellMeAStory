class FillTextEffect extends TextEffect{

	constructor(JSON_,parentContent_){
		super(JSON_,parentContent_);

	}

	apply(){
		// console.log("*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&applying fill property&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
		console.log("Fill color is " + this.vareables.color)
		console.log(this.parentContent.parentScene.id + " , " + this.parentContent.id)
		this.parentContent.html.fe.style.color=this.vareables.color;
	}
}