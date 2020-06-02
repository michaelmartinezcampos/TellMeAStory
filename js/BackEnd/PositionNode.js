class PositionNode{ //not to be confused with nodejs
	constructor(scene_){
		this.scene=scene_;


		
		//offset effects children and siblings bot not object
		//mesured in increments not in pixels
		this.offset={} //this offset based on previous
		this.offset.x = 1;
		this.offset.y = 1;

		this.space={} //space needed before the next
		this.space.x = 1;
		this.space.y = 1;

		this.position={} //absolute position
		this.position.x;
		this.position.y;

		this.parentNode;
		//this.siblingNodes=[];
		this.prevSiblingNodes=[];
	}
	setSpaceToParents(){
		this.parentNode.space.x += this.space.x
		if(this.parentNode instanceof PositionNode){
			this.parentNode.setSpaceToParents();
		}

	}
	setParent(){
		if(this.scene.prevScenesArray.length>0){
			this.parentNode=this.scene.prevScenesArray[0].be.node;
			//this.scene.prevScenesArray[0].be.node.children.push()
		}else{
			this.parentNode=null;//add to some master node
		}

	}
	setPrevSiblings(){
		if(this.parentNode!=null){
			for(let i in this.parentNode.scene.nextScenesArray){
				if(this.parentNode.scene.nextScenesArray[i] != this.scene){
					this.prevSiblingNodes.push(this.parentNode.scene.nextScenesArray[i])
				}else{
					break;
				}
			}
		}
		

	}
	

	setPosition(){
		this.position.y=this.scene.index;
		let xpos=0;
		for(let i in this.prevSiblingNodes){
			//console.log(this.prevSiblingNodes[i])
			xpos += this.prevSiblingNodes[i].be.spacing.unitWidths;
		}

		this.position.x=xpos;

	}



}