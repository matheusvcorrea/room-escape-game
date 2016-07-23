var end = function(game) {}

end.prototype = {
  	create: function() {
		game.stage.backgroundColor = backgroundColor;
	            
        var logo = game.add.sprite(game.world.centerX, game.world.centerY-100, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.5, 0.5);

        var textStyle = { font: "24px Arial", fill: "#000000", align: "center" };	        	
    	var text = game.add.text(game.world.centerX-250, game.world.centerY+20, "Você terminou o jogo! O robozinho Mr. Robot\n esepra que você tenha aprendido mais um pouco \najudando ao Mr. Robot.", textStyle);

		var buttonStyle = {font: "22px Arial", fill: "#ffffff", backgroundColor: "#CA4A2E"};
	    var startButton = game.add.button(game.world.centerX-50, game.world.centerY+130, null, this.click);
	    var total = "Total: " + placar;
	    var startLabel = game.make.text(0, 0, total, buttonStyle);
	    startButton.addChild(startLabel);
	},
	click: function() {
		return false;
	}
}