var step_1 = function (game) {}

var reg = {};

step_1.prototype = {
	create: function () {
		backgroundImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bg_setp_1');
		backgroundImage.anchor.setTo(0.5);
		this.add.sprite(this.game.world.centerX+144, this.game.world.centerY-54, 'earth');

		star = this.add.sprite(this.game.world.centerX+195, this.game.world.centerY+30, 'star');
		star.scale.setTo(0.7, 0.7);
		star.inputEnabled = true;
		star.events.onInputDown.add(this.starClick, this);

		coffe_cup = this.add.sprite(this.game.world.centerX+195, this.game.world.centerY+30, 'coffe_cup');
		coffe_cup.inputEnabled = true;
		coffe_cup.input.enableDrag(true);

		next = this.add.sprite(655, 535, 'next');
		next.inputEnabled = true;
		next.events.onInputDown.add(this.next, this);
		next.visible = false;

	    // initiate the modal class
	    reg.modal = new gameModal(game);
	    step_createModals_1();

	    score = this.game.add.text(590, 8, '');
	    score.text = 'Acertos: ' + placar;
	    score.font = 'Helvetica';
	    score.fontSize = 28;
	    score.fontWeight = 'normal';
	    score.stroke = '#000000';
	    score.strokeThickness = 1;
	    score.fill = 'red';
	},
	starClick: function () {
		reg.modal.showModal("starModal");		
		next.visible = true;
	},
	next: function() {
	    this.game.state.start("Step_2");
	}
}

function scoreUptade(v) {
	placar += v;
	score.text = 'Acertos: ' + placar;
}

function step_createModals_1() {
	reg.modal.createModal({
		type: "starModal",
		includeBackground: false,
		modalCloseOnInput: true,
		itemsArr: [{
			type: "image",
			content: "bg_modal",
			offsetY: -20,
			contentScale: 1
		}, {
			type: "text",
			content: "Algoritmo é uma sequência de passos finita e não ambigua?",
			fontSize: 18,
			color: "0x363636",
			offsetY: -50
		}, {
			type: "text",
			content: "Verdadeiro",
			fontSize: 22,
			color: "0xD50000",
			offsetY: 100,
			offsetX: -120,
			callback: function() {
				scoreUptade(1);
				star.destroy();
				reg.modal.hideModal("starModal");
			}
		}, {
			type: "text",
			content: "Falso",
			fontSize: 22,
			color: "0xD50000",
			offsetY: 100,
			offsetX: 120,
			callback: function() {
				scoreUptade(-1);
				star.destroy();
				reg.modal.hideModal("starModal");
			}
		}]
	});
}