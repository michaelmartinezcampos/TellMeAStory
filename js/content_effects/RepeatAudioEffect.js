class RepeatAudioEffect extends AudioEffect{
	constructor(JSON_,parentContent_){
		
		super(JSON_,parentContent_);

	}

	apply(){
		this.parentContent.source=this.vareables.repeat;


	}
}
