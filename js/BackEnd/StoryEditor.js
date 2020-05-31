class StoryEditor{
	constructor(story_,backEnd_){
		this.backEnd=backEnd_;
		this.story=story_;
		this.parent=null;


		this.sceneEditors = {};
		for(let scene in this.story.scenesLib){
			this.sceneEditors[scene] = new SceneEditor(this.story.scenesLib[scene], this)
		}
	}

	display(){
		console.log("display story")
		for(let scene in this.story.scenesLib){
			
		}
	}
}