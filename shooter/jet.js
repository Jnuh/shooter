var Jet = function(game){
	this.game = game;
	this.x = 100;
	this.y = 100;
	this.speed = 4;
	this.isUpKey = false;
	this.isRightKey = false;
	this.isDownKey = false;
	this.isLeftKey = false;
};

Jet.prototype.update = function(){
	this.checkDirection();
};

Jet.prototype.draw = function(){
	this.game.drawRectangle('#FFF', this.x, this.y, 20, 20)
};


Jet.prototype.checkDirection = function(){
	if(this.isUpKey){
		this.y = this.y - this.speed;
	};
	if(this.isRightKey){
		this.x = this.x + this.speed;
	};
	if(this.isDownKey){
		this.y = this.y + this.speed;
	};
	if(this.isLeftKey){
		this.x = this.x - this.speed;
	};
}; 
