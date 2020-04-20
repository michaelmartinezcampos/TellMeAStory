class ClippingAudioEffect extends AudioEffect{
	constructor(JSON_,parentContent_){
		
		super(JSON_,parentContent_);

		// this.vareables.start==0;
		
		// this.vareables.duration==null;
	}

	apply(){
		// console.log("apply clipping property")
		this.parentContent.start=this.vareables.start;
		this.parentContent.duration=this.vareables.duration;

	}
}