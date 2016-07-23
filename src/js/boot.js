var boot = function(game) {
	// console.log("%cStarting my game", "color:white; background:red");
};

boot.prototype = {
	preload: function() {
          this.game.load.image("loading", "img/phaser.png"); 
	},
  	create: function() {
		this.game.state.start("Preload");
	}
}