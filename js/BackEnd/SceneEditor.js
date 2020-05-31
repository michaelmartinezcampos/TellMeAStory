class SceneEditor{
	constructor(scene_,story_,backEnd_){
		this.backEnd=backEnd_;
		this.scene=scene_;
		this.parent = story_;

		


	}

	createHTML(){
		this.icon = document.createElement("div");
		this.icon.pos={};
		this.icon.style.position="absolute";
		this.icon.style.width="75px";
		this.icon.style.height="50px";
		this.icon.editor=this;
	}

	getPosition(){
		// if(size(this.scene.lastScenes)>

	}

	display(){
		console.log("display scene");

	}
}