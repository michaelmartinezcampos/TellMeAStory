class PositionNode{ //not to be confused with nodejs
	constructor(scene_){
		this.scene=scene_;


		
		//offset effects children and siblings bot not object
		//mesured in increments not in pixels
		// this.offset={} //this offset based on previous
		// this.offset.x = 1;
		// this.offset.y = 1;

		// this.space={} //space needed before the next
		// this.space.x = 1;
		// this.space.y = 1;

		// this.position={} //absolute position
		// this.position.x;
		// this.position.y;
		this.posIndex={}
		this.posIndex.x;
		this.posIndex.y;

		



		
		
		//this.siblingNodes=[];
		this.prevSiblingNodes=[];
	}

	setParents(){
		this.parentNodes=[];
		for(let scene in this.scene.prevScenes){ //first one will be the main parent the rest will be clones
			this.parentNodes.push(this.scene.prevScenes[scene])
		}
	}
	setChildren(){
		this.childrenNodes=[];
		for(let scene in this.scene.nextScenes){
			this.childrenNodes.push(this.scene.nextScenes[scene])
		}
	}

	setPrevSiblings(){
		this.prevSiblingNodes=getPrevSiblings();
	}

	getPrevSiblings(){
		if(this.parentNodes.length>0){
			
			let myPositionInFam = this.parentNodes[0].indexOf(this)


			return this.parentNodes[0].childrenNodes.slice(0,myPositionInFam);

		}else{
			return [];
		}
		 
	}
	setWidthIndexBottomUp(){
		

	}
	setPositionIndexTopDown(){

		this.posIndex.x=this.parentNodes[0].posIndex.x+this.prevSiblingNodes.length;
		for(let node of this.childrenNodes){
			node.setPositionIndexDown();
		}
	}

	
	// setParent(){
	// 	if(this.scene.prevScenesArray.length>0){
	// 		this.parentNode=this.scene.prevScenesArray[0].be.node;
	// 		//this.scene.prevScenesArray[0].be.node.children.push()
	// 	}else{
	// 		this.parentNode=null;//add to some master node
	// 	}

	// }
	
	

	// setPosition(){
	// 	this.position.y=this.scene.index;
	// 	let xpos=0;
	// 	for(let i in this.prevSiblingNodes){
	// 		//console.log(this.prevSiblingNodes[i])
	// 		xpos += this.prevSiblingNodes[i].be.spacing.unitWidths;
	// 	}

	// 	this.position.x=xpos;

	// }



}