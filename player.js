var Player = function()
{
	this.sprite = document.createElement("img");
	
	this.position = new Vector2(0, 0);
	this.scale = new Vector2(100, 100);
	this.rotation = 0;
}

//Add Drawing methods