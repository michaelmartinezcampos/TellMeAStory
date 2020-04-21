class ImageContent extends Content{
	constructor(contentJson_,parentScene_){ //,url_, content_, propertiesJSON_
		super(contentJson_,parentScene_)
	}

	getEffect(effectName_,effectJSON_){
		if(effectName_=="position"){
			return new PositionImageEffect(effectJSON_,this)
		}else if(effectName_=="glow"){
			return new GlowImageEffect(effectJSON_,this)
		}
		else{
			return new ImageEffect(effectJSON_,this)
		}
	}


	createEffects(){
		// console.log(this.JSONData)
		for(let effect in this.JSONData.effects.general){
			this.effects.general[effect] = this.getEffect(effect,this.JSONData.effects.general[effect])
		}

		this.effects.clickable.generic={}
		for(let effect in this.JSONData.effects.clickable.generic){

			this.effects.clickable.generic[effect]=this.getEffect(effect, this.JSONData.effects.clickable.generic[effect]);
			
		}

		// for(let effect in this.JSONData.effects.entrance){
		// 	this.effects.entrance[effect]=new ImageEffect(this.JSONData.effects.entrance[effect],this)
		// }
		// for(let effect in this.JSONData.effects.exit){
		// 	if(effect=="hide"){
		// 		this.effects.exit[effect]=new HidePositionEffect(this.JSONData.effects.exit[effect],this)
		// 	}else if(effect=="unglow"){{
		// 		this.effects.exit[effect]=new ImageEffect(this.JSONData.effects.exit[effect],this)
		// 	}
			
		// }

		// //console.log(this.id + "  " + this.JSONData.effects.clickable)
		// for(let effect in this.JSONData.effects.clickable){

		// 	if(effect=="glow"){
		// 		this.effects.clickable[effect]=new GlowTextEffect(this.JSONData.effects.clickable[effect],this)
		// 	}else{
		// 		this.effects.clickable[effect]=new ContentEffect(this.JSONData.effects.clickable[effect],this)
		// 	}


		// }
	
	}

	createFrontEndHTML(){
		
		this.html.fe = document.createElement("img");
		this.html.fe.src=this.content.value;
		this.html.fe.classList.add('background-img')

		this.html.fe.onload =function(){
			this.createEffects();
			this.applyGeneralEffects();
			
		}.bind(this)

	}



	applyGeneralEffects(){
		for(let effect in this.effects.general){
			this.effects.general[effect].apply();
		}
	}
	


	displayFrontEndHTML(){
		// console.log(this.htmlParent)
		//document.getElementById("background_img").append(this.html.fe);
		this.htmlParent.append(this.html.fe);
	}

}