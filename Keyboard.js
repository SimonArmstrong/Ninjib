var Keyboard = function(){
	window.addEventListener('keydown', function(e){ self.onKeyDown(e); }, false);
	window.addEventListener('keyup', function(e){ self.onKeyDown(e); }, false);
	
	this.keys = [];
}

Keyboard.prototype.OnKeyDown(e){
	this.keys[e.keyCode] = true;
}

Keyboard.prototype.OnKeyUp(e){
	this.keys[e.keyCode] = false;
}

Keyboard.prototype.IsKeyDown(keyCode){
	return this.keys[keyCode];
}