//this game will have only 1 state 
var GameState = { 
init: function() { 
this.game.physics.startSystem(Phaser.Physics.ARKADE); 
this.cursors = this.game.input.keyboard.createCursorKeys(); 
}, 

preload: function() { 
this.load.image('water', 'img/water.jpg'); 
this.load.image('ship_pl_1', 'img/ship_pl_1.png'); 
this.SWIMMING_SPEED = 1; 
// this.load.spritesheet('water_ripple_spritesheet', 'img/water_ripple_spritesheet.png', 62,179,5); 
},  
create: function() { 
this.water = this.add.sprite(0, 0, 'water'); 
this.player = this.add.sprite(20, 250, 'ship_pl_1'); 
this.game.physics.arcade.enable(this.player) 

// this.player.animations.add('waves', [0,1,2,1,], 6, true);


this.flag = false
}, 
update: function() { 

// if (this.player.body.velocity.y > 0 || this.player.body.velocity.x > 0)

if(this.cursors.up.isDown){ 
console.log(this.player.body.velocity.y) 
this.player.body.velocity.y -= this.SWIMMING_SPEED 
} else if (!this.cursors.up.isDown && this.player.body.velocity.y < 0) { 
this.player.body.velocity.y += this.SWIMMING_SPEED 
} 


if (this.cursors.down.isDown){ 
console.log(this.player.body.velocity.y) 
this.player.body.velocity.y += this.SWIMMING_SPEED 
} else if (!this.cursors.up.isDown && this.player.body.velocity.y > 0) { 
this.player.body.velocity.y -= this.SWIMMING_SPEED 
} 


if(this.cursors.left.isDown){ 
console.log(this.player.body.velocity.x) 
this.player.body.velocity.x -= this.SWIMMING_SPEED 
} else if (!this.cursors.left.isDown && this.player.body.velocity.x < 0) { 
this.player.body.velocity.x += this.SWIMMING_SPEED 
} 


if (this.cursors.right.isDown){ 
console.log(this.player.body.velocity.x) 
this.player.body.velocity.x += this.SWIMMING_SPEED 
} else if (!this.cursors.right.isDown && this.player.body.velocity.x > 0) { 
this.player.body.velocity.x -= this.SWIMMING_SPEED 
} 
}, 

}; 

//initiate the Phaser framework 
var game = new Phaser.Game(480, 480, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');
