var step_12 = function (game) {}

var reg =  {};
step_12.prototype = {
	create: function () {
		backgroundImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bg_step_12');
		backgroundImage.anchor.setTo(0.5);
		backgroundImage.scale.setTo(0.9, 0.9);

		star = this.add.sprite(this.game.world.centerX+40, this.game.world.centerY-17, 'star');
		star.scale.setTo(0.6, 0.6);
		star.inputEnabled = true;
		star.events.onInputDown.add(this.starClick, this);

		next = this.add.sprite(655, 535, 'next');
		next.inputEnabled = true;
		next.events.onInputDown.add(this.next, this);
		next.visible = false;

		back = this.add.sprite(20, 535, 'back');
		back.inputEnabled = true;
		back.events.onInputDown.add(this.back, this);

	    // initiate the modal class
	    reg.modal = new gameModal(game);
	    step_createModals_12();

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
	},
	next: function() {
	    this.game.state.start("Step_13");
	},
	back: function() {
	    this.game.state.start("Step_11");
	}
}

function scoreUptade(v) {
	placar += v;
	score.text = 'Acertos: ' + placar;
	next.visible = true;
}

function step_createModals_12() {
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
			content: "Grafo é uma estrutura formada por um conjuto de arestas e vértices.",
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