class ImageContent extends Content{
	constructor(contentJson_,parentScene_){ //,url_, content_, propertiesJSON_
		super(contentJson_,parentScene_)
	}


	createEffects(){
		// console.log(this.JSONData)
		for(let effect in this.JSONData.effects.general){
			if(effect=="position"){
				this.effects.general[effect]=new PositionImageEffect(this.JSONData.effects.general[effect],this)
			}else if(effect=="glow"){
				this.effects.general[effect]=new GlowImageEffect(this.JSONData.effects.general[effect],this)
			}
			else{
				this.effects.general[effect]=new ImageEffect(this.JSONData.effects.general[effect],this)
			}
		}

		this.effects.clickable.generic={}
		for(let effect in this.JSONData.effects.clickable.generic){
			if(effect=="position"){
				this.effects.clickable.generic[effect]=new PositionImageEffect(this.JSONData.effects.clickable.generic[effect],this)
			}else if(effect=="glow"){
				this.effects.clickable.generic[effect]=new GlowImageEffect(this.JSONData.effects.clickable.generic[effect],this)
			}
			else{
				this.effects.clickable.generic[effect]=new ImageEffect(this.JSONData.effects.clickable.generic[effect],this)
			}
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