var LEFT = 0;
var RIGHT = 1;
var UP = 2;
var DOWN = 3;

var Enemy = function()
{
	this.enemyType = 0;
	
	this.sprite = document.createElement("img");
	
	this.position= new Vector2(0,0);
	this.direction = LEFT;
	
	this.speed = 0;
	
	//Sprite needed
	this.width = 0;
	this.height = 0;
	
	this.detectionType = 0;
	this.detectionArea =  0;
}

//Add Drawing methods