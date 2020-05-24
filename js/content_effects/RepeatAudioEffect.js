class RepeatAudioEffect extends AudioEffect{
	constructor(JSON_,parentContent_){
		
		super(JSON_,parentContent_);

	}

	apply(){
		console.log(this.parentContent)
		this.parentContent.loop=this.vareables.repeat;


	}
}
