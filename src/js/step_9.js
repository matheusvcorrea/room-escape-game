var step_9 = function (game) {}

var reg =  {};
step_9.prototype = {
	create: function () {
		backgroundImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bg_step_9');
		backgroundImage.anchor.setTo(0.5);
		backgroundImage.scale.setTo(1.2, 1.2);

		star = this.add.sprite(this.game.world.centerX-150, this.game.world.centerY-70, 'star');
		star.scale.setTo(0.8, 0.8);
		star.inputEnabled = true;
		star.events.onInputDown.add(this.starClick, this);

		frame = this.add.sprite(this.game.world.centerX-230, this.game.world.centerY-90, 'frame');
		frame.scale.setTo(0.9, 0.9);
		frame.inputEnabled = true;
		frame.input.enableDrag(true);

		next = this.add.sprite(655, 535, 'next');
		next.inputEnabled = true;
		next.events.onInputDown.add(this.next, this);
		next.visible = false;

		back = this.add.sprite(20, 535, 'back');
		back.inputEnabled = true;
		back.events.onInputDown.add(this.back, this);

	    // initiate the modal class
	    reg.modal = new gameModal(game);
	    step_createModals_9();

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
	    this.game.state.start("Step_10");
	},
	back: function() {
	    this.game.state.start("Step_8");
	}
}

function scoreUptade(v) {
	placar += v;
	score.text = 'Acertos: ' + placar;
	next.visible = true;
}

function step_createModals_9() {
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
			content: "Em uma estrura de dados como a Pilha, podemos dizer que\n suas operações respeitam a prioridade LIFO(Last In First Out).",
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