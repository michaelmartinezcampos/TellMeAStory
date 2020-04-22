class ImageContent extends Content{
	constructor(contentJson_,parentScene_){ //,url_, content_, propertiesJSON_
		super(contentJson_,parentScene_)
		this.random=Math.random();
	}

	getEffect(effectName_,effectJSON_){

		if(effectName_=="position"){
			return new PositionImageEffect(effectJSON_,this)
		}else if(effectName_=="glow"){
			return new GlowImageEffect(effectJSON_,this)
		}else if(effectName_=="replace"){
			return new ReplaceImageEffect(effectJSON_,this)
		}
		else{
			return new ImageEffect(effectJSON_,this)
		}
	}


	createEffects(){
		for(let effect in this.JSONData.effects.general){
			this.effects.general[effect] = this.getEffect(effect,this.JSONData.effects.general[effect])
		}

		this.effects.clickable.generic={}
		for(let effect in this.JSONData.effects.clickable.generic){
			this.effects.clickable.generic[effect]=this.getEffect(effect, this.JSONData.effects.clickable.generic[effect]);
		}

	
	
	}

	createFrontEndHTML(){
		
		this.html.fe = document.createElement("img");
		this.html.fe.src=this.content.value;
		this.html.fe.classList.add('background-img')

		// this.createEffects();
		// this.applyGeneralEffects();



		this.html.fe.onload =function(){
			this.imgLoad();

			//only want this to fire the first time the image is loaded;
			this.html.fe.onload=null;

			
		}.bind(this)

	}
	imgLoad(){
		this.createEffects();
		this.applyGeneralEffects();
	}





	// applyGeneralEffects(){
	// 	for(let effect in this.effects.general){
	// 		this.effects.general[effect].apply();
	// 	}
	// }
	


	displayFrontEndHTML(){
		// console.log(this.htmlParent)
		//document.getElementById("background_img").append(this.html.fe);
		this.htmlParent.append(this.html.fe);
	}

}