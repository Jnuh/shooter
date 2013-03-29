var Enemy1 = function (game){
	this.game = game
	this.x = Math.floor(Math.random() * 700);
	this.y = 20;
};


Enemy1.prototype.update = function(){
	this.y = this.y + 2;

	if((Math.random() * 10) > 9.96){
		enemy1Array.push(new Enemy1());
	}
	if (enemy1Array.length > 30){
		enemy1Array.pop();
	}
};

Enemy1.prototype.draw = function(){


	this.game.ctx.fillStyle = 'red';
	this.game.ctx.fillRect(this.x, this.y, 20, 20);
	//this.game.drawRectangle('#FFFF00', this.x, this.y, 15, 15)

};























/*function spawnEnemy(n){
	for(i=0; i<n; i++){
		enemy1Array[totalEnemies] = new Enemy();
		totalEnemies++;
	}
}

function drawAllEnemies(){
	//clear enemies here
	for(i=0;i<=enemies.length; i++){
		enemies[i].draw();
	}
}

function startspawning(){
	stopspawning();
	spawnInterval = setInterval(function() {spawnEnemy(spawnAmount);}, spawnRate);
}	

function stopspawning(){
	clearInterval(spawnInterval);
}*/
