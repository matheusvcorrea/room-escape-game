var home = function(game) {}

home.prototype = {
  	create: function() {
		game.stage.backgroundColor = backgroundColor;
	            
        var logo = game.add.sprite(game.world.centerX, game.world.centerY-100, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.5, 0.5);

        var textStyle = { font: "24px Arial", fill: "#000000", align: "center" };	        	
    	var text = game.add.text(game.world.centerX-230, game.world.centerY+20, "Ajude Mr. Robot?!\nEscape dos cenários respondendo a perguntas \nsobre Algoritmos e Estruturas de Dados", textStyle);

		var buttonStyle = {font: "22px Arial", fill: "#ffffff", backgroundColor: "#CA4A2E"};
	    var startButton = game.add.button(game.world.centerX-90, game.world.centerY+130, null, this.clickStart);
	    var startLabel = game.make.text(0, 0, " Cliquei para Jogar ", buttonStyle);
	    startButton.addChild(startLabel);
	},
	clickStart: function() {
		this.game.state.start("Step_1");
	}
}