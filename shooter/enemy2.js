var Enemy2 = function (game){
	this.game = game
	this.x = 400;
	this.y = -40;
};


Enemy2.prototype.update = function(){
	this.y = this.y + 3;
};

Enemy2.prototype.draw = function(){
	this.game.drawRectangle('#FFFF00', this.x, this.y, 15, 15)
};