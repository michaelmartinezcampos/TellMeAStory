class BackEnd{
	constructor(){
		this.storyEditor=new StoryEditor(currentStory, this);
		console.log("create backend!!")

		this.currentEditor = this.storyEditor
		
		// this.sceneEditor = new SceneEditor(cu);
		
		// this.objectEditor;
		// this.effectEditor;
		// this.actionEditor;

		this.toolbox;
		this.editorWindow= new EditorWindow();

		
	}

	display(){
		this.editorWindow.display();
		this.currentEditor.display();
	}

}