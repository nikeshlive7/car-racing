

var parent = document.getElementById("canvas");
var racingTrack = document.getElementById("racing-track");
var scoreBoard=document.getElementById("score-board");
var gameOver=document.getElementById("game-over");

document.onkeydown = keyPressed;
var trackTop=0;
var score=0;	
var stopAllCar=false;
var mainLoop=setInterval(carMove,1500);



function Car(){
	
    this.x=0;
	this.y=0;
	this.intervalId;
	this.elementId;
	var that = this;
	
	//method for creating the car
	this.generateOpponentCar = function(){
			
				//creating opponent car
				
				counterCreateCar=0;
				that.elementId=document.createElement('div');
				that.elementId.className = "opponent-car";
				that.x = 100*getRandom()+60;
				that.y = -100;
				that.elementId.style.top = that.y+"px";
				that.elementId.style.left = that.x+"px";
				parent.appendChild(that.elementId);
				that.intervalId=setInterval(that.moveOpponentDownward,20);
				
				
			
			
			
		};
	
	//method for moving the car	
	this.moveOpponentDownward=function(){
			
				//moving track-upward
				trackTop=racingTrack.offsetTop;
		   		trackTop+=1;
		   		racingTrack.style.top=trackTop+"px";
				
		   		 that.y+=5;
		  		 if(that.y>=600){
				  score++;
			   	  clearInterval(that.intervalId);
				  parent.removeChild(that.elementId);				 
				  }
				  
				
				 if(that.y>=(ourCar.offsetTop-100) && that.x==ourCar.offsetLeft)
				 {	
					stopAllCar=true;
					clearInterval(mainLoop);
					clearInterval(that.intervalId);
					alert("Game Over");
					
					gameOver.innerHTML="Refresh Browser to play again";
					
					}
					
				if(stopAllCar==true){
					clearInterval(that.intervalId);
					
				}
				
				that.elementId.style.top = that.y+"px";
				scoreBoard.innerHTML="Score:- "+score ;
				
		};
		
		
	}

	
//method for generating random position	
function getRandom(){
		
			return Math.round(Math.random()*2);
		
		}
		
		
// method for accessing car object
function carMove(){
	var car = new Car();
	car.generateOpponentCar();
	
	
	}
	

//accessing and manupulating main car
var ourCar = document.getElementById("our-car");
function keyPressed(e) {
	
	console.log(e.keyCode);
	left=ourCar.offsetLeft;
	console.log(left);
	switch(e.keyCode){
		case 37:if(ourCar.offsetLeft>60) //left
				{	left-=100;
					ourCar.style.left = left+'px';
					}
				break;
		case 39: if(ourCar.offsetLeft<260) //right
				{	left+=100;
					ourCar.style.left = left+'px';
					}
				break;				
		case 38:  flagtop=1;//up
				break;
		case 40:  flagtop=0;//down
				break;
		}
	
		
  }
