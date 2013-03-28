var Jet = function(game){
	this.game = game;
	this.x = 100;
	this.y = 100;
}

Jet.prototype.update = function(){
	this.x = this.x + 1;
	this.y = this.y + 1;
};

Jet.prototype.draw = function(){
	this.context.fillStyle = "#000";
	this.context.fillRect = (100,100,20,20);
};