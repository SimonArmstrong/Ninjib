var Keyboard = function(){
	window.addEventListener('keydown', function(e){ self.onKeyDown(e); }, false);
	window.addEventListener('keyup', function(e){ self.onKeyDown(e); }, false);
	
	this.keys = [];
}

Keyboard.prototype.OnKeyDown = function(e){
	this.keys[e.keyCode] = true;
}

Keyboard.prototype.OnKeyUp = function(e){
	this.keys[e.keyCode] = false;
}

Keyboard.prototype.IsKeyDown = function(keyCode){
	return this.keys[keyCode];
}