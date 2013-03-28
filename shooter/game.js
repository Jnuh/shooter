var Game = function (){
	var canvas = document.getElementById('canvas');
	this.ctx = canvas.getContext('2d');
	this.ctx_width = canvas.width;
	this.ctx_height = canvas.height;
	this.jet = new Jet(this);
	this.bg = new Background(this);
	this.enemy1 = new Enemy1(this);
	this.enemy2 = new Enemy2(this);
	enemy1Array = [];


	//set keydown/keyup
	document.addEventListener('keydown', checkKeyDown, false);
	document.addEventListener('keyup', checkKeyUp, false);
	function checkKeyDown(e) {
		var keyId = e.keyCode || e.which;
		if (keyId === 38 || keyId === 87) {     //up arrow and w
			game.jet.isUpKey = true;
			e.preventDefault();
		};
		if (keyId === 39 || keyId === 68) {     //right arrow and d
			game.jet.isRightKey = true;
			e.preventDefault();
		};
		if (keyId === 40 || keyId === 83) {     //down arrow and s
			game.jet.isDownKey = true;
			e.preventDefault();
		};
		if (keyId === 37 || keyId === 65) {     //left arrow and a
			game.jet.isLeftKey = true;
			e.preventDefault();
		};
	};

	function checkKeyUp(e) {
		var keyId = e.keyCode || e.which;
		if (keyId === 38 || keyId === 87) {     //up arrow and w
			game.jet.isUpKey = false;
			e.preventDefault();
		};
		if (keyId === 39 || keyId === 68) {     //right arrow and d
			game.jet.isRightKey = false;
			e.preventDefault();
		};
		if (keyId === 40 || keyId === 83) {     //down arrow and s
			game.jet.isDownKey = false;
			e.preventDefault();
		};
		if (keyId === 37 || keyId === 65) {     //left arrow and a
			game.jet.isLeftKey = false;
			e.preventDefault();
		};
	};


	//set loop and framerate
	var game = this;
	var frameRate = 45;
	var gameLoop = setInterval(function(){
		game.updateAll();
		game.drawAll();
	}, 1000/frameRate); 
};

Game.prototype.updateAll = function (){
	this.bg.update();
	this.jet.update();
	this.enemy1.update();  //pass in spawn amount
	this.enemy2.update();  //pass in spawn amount
};

Game.prototype.drawAll = function (){
	//this.ctx.clearRect(0, 0, canvas.width, canvas.height)
	this.bg.draw();
	this.jet.draw();
	this.enemy1.draw();   
	this.enemy2.draw();
};

Game.prototype.drawRectangle = function(color, x, y, width, height){       //draws player rectangle
	this.ctx.fillStyle = color;
	this.ctx.fillRect(x, y, width, height);
};

Game.prototype.drawEnemy1 = function(color, x, y, width, height){			//draws enemy1 rectangle
	this.ctx.fillStyle = color;
	this.ctx.fillRect(x, y, width, height);
};

Game.prototype.drawEnemy2 = function(color, x, y, width, height){			//draws enemy2 rectangle
	this.ctx.fillStyle = color;
	this.ctx.fillRect(x, y, width, height);
};









//Game.prototype.drawJet = function(x, y){									//draws player jet
//	var img = new Image();
//	img.src = 'images/jet.png';
//	this.ctx.drawImg(img, x, y)
//}

Game.prototype.drawBg = function(x, y){
	var img = new Image();	
	img.src = 'images/stars.png';
	this.ctx.drawImage(img, x, y);

	//img.addEventListener('load', drawImg, false);
	//function drawImg(){
	//	ctx.drawImage(img, 0, 0);	
	//	}
	// when attempting to add a load function, removes other objects from the canvas
};



	