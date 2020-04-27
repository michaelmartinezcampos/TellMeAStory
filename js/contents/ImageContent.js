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
		}else if(effectName_=="opacity"){
			return new OpacityImageEffect(effectJSON_,this)
		}else if(effectName_=="hide"){
			return new HideImageEffect(effectJSON_,this)
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
		this.effects.clickable.hover={}
		for(let effect in this.JSONData.effects.clickable.hover){
			this.effects.clickable.hover[effect]=this.getEffect(effect, this.JSONData.effects.clickable.hover[effect]);
		}
		this.effects.clickable.pressed={}
		for(let effect in this.JSONData.effects.clickable.pressed){
			this.effects.clickable.pressed[effect]=this.getEffect(effect, this.JSONData.effects.clickable.pressed[effect]);
		}
		this.effects.hover={}
		for(let effect in this.JSONData.effects.hover){
			this.effects.hover[effect]=this.getEffect(effect, this.JSONData.effects.hover[effect]);
		}
		this.effects.mousePressed={}
		for(let effect in this.JSONData.effects.mousePressed){
			this.effects.mousePressed[effect]=this.getEffect(effect, this.JSONData.effects.mousePressed[effect]);
		}
		this.effects.entrance={}
		for(let effect in this.JSONData.effects.entrance){
			this.effects.entrance[effect]=this.getEffect(effect, this.JSONData.effects.entrance[effect]);
		}
		this.effects.exit={}
		for(let effect in this.JSONData.effects.exit){
			this.effects.exit[effect]=this.getEffect(effect, this.JSONData.effects.exit[effect]);
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
		//console.log(this.html.fe)
		//document.getElementById("background_img").append(this.html.fe);
		this.htmlParent.append(this.html.fe);
		this.html.fe.style.display="block";
	}

}