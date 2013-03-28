var Background = function(game){
	this.game = game;
	this.x = 0;
	this.y = -300;
};

Background.prototype.update = function(){

	if(this.y < -10){
		this.y = this.y + 0.75;
	} else {
		this.y = -300;
	}

};

Background.prototype.draw = function(){
	this.game.drawBg(this.x, this.y);
};







	