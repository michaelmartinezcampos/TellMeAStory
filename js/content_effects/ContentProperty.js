// class ContentEffect{

// 	constructor(JSON_,parentContent_){
// 		this.parentContent=parentContent_;
// 		//typeof
// 		this.type;
// 		this.be={};
// 		this.be.html={}
// 		this.vareables={}
	
	
// 		if(JSON!=null){
// 			this.type=JSON_.type;




// 			for(let vareableName in JSON_.propertyValues){
// 				//this.vareables[vareableName]={}
// 				//this.vareables[vareableName].type=JSON_.propertyValues[vareableName].type;
	
// 				//console.log


// 				this.vareables[vareableName]=JSON_.propertyValues[vareableName];
	
// 				// if(JSON_.propertyValues[vareableName].type=="float"){
// 				// 	this.vareables[vareableName].value=parseFloat(JSON_.propertyValues[vareableName].value);
// 				// }
// 				// else if(JSON_.propertyValues[vareableName].type=="string"){
// 				// 	this.vareables[vareableName].value=JSON_.propertyValues[vareableName].value;
// 				// }
				
// 			}
// 			// console.log(this)
// 		}
// 	}
// 	setPossibleTypes(){
// 		this.possibleTypes={};
// 	}
// 	apply(){
// 		// console.log(this)
// 		// console.log("Has no apply function")
// 	}
// }
// ContentProperty.prototype.getBackEndHTML=function(){
// 	return this.be.html.container;
// }


// ContentProperty.prototype.createBackEndHTML=function(){
// 	this.be.html.container=document.createElement("div");
// 	this.be.html.container.classList.add("property-container");

// 	this.be.html.vareables={}
// 	for(let vareableName in this.vareables){

// 		//console.log(property)
// 		this.be.html.vareables[vareableName]={}


// 		this.be.html.vareables[vareableName].container=document.createElement("div");
// 		this.be.html.vareables[vareableName].container.classList.add("property-cotainer-" + vareableName);
// 		//this.be.html.vareables[vareableName].container.innerHTML=property;
// 		// this.be.html.vareables[vareableName].container.style.width="300px";
// 		// this.be.html.vareables[vareableName].container.style.height="300px";
// 		// this.be.html.vareables[vareableName].container.style.position="absolute"
// 		// this.be.html.vareables[vareableName].container.style.right="0px";
// 		// this.be.html.vareables[vareableName].container.style.bottom="0px";
// 		this.be.html.container.append(this.be.html.vareables[vareableName].container)



// 		this.be.html.vareables[vareableName].title = document.createElement("span");
// 		this.be.html.vareables[vareableName].title.classList.add("property-title");
// 		this.be.html.vareables[vareableName].title.innerHTML = vareableName + ' : ';
// 		this.be.html.vareables[vareableName].container.append(this.be.html.vareables[vareableName].title)


// 		this.be.html.vareables[vareableName].input = document.createElement("input");
// 		this.be.html.vareables[vareableName].input.classList.add("property-input");
// 		this.be.html.vareables[vareableName].input.type="number";
// 		this.be.html.vareables[vareableName].input.value=this.vareables[vareableName]
// 		this.be.html.vareables[vareableName].input.min = '0';
// 		this.be.html.vareables[vareableName].input.max = '30';
// 		this.be.html.vareables[vareableName].input.vareableName=vareableName;
// 		this.be.html.vareables[vareableName].container.append(this.be.html.vareables[vareableName].input)



// 		this.be.html.vareables[vareableName].input.onchange=function(event_){
// 			this.vareables[vareableName]=event_.target.value;
// 			this.parentContent.audioObjectHandler.audioDisplay.draw(event_.target.value,25);
// 		}.bind(this);

// 		this.updateChange();

// 	}

	
// }

// ContentProperty.prototype.updateChange=function(){
// 		// update instructions

// 		//why uodate the icon
// 	this.parentContent.updateIconContent();



// }




// ContentProperty.prototype.getJSON=function(){
// 	let property={}
// 	property.vareables={};

// 	for(let vareableName in this.vareables){
// 		property.vareables[vareableName]={}
// 		property.vareables[vareableName].value=this.vareables[vareableName].value;
// 		property.vareables[vareableName].type=this.vareables[vareableName].type;

// 	}
// 	property.type=this.type;


// 	// for(let perpertyName in this.propertyValues){
// 	// 	properties[perpertyName]=this.propertyValues[perpertyName];
// 	// }

// 	return property;
// }