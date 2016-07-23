var preload = function(game) {}

var backgroundColor = "#fafafa";
var placar = 0;

preload.prototype = {
	preload: function() {
		this.game.load.image('logo', 'img/robot.svg');
		this.load.image('bg_modal', 'img/bg_modal.png');
		this.game.load.image('star', 'img/estrela.png');
		this.game.load.image('next', 'img/avancar.png');
		this.game.load.image('back', 'img/voltar.png');		
		// Step 1
		this.game.load.image('bg_setp_1', 'img/office_room.svg');
		this.game.load.image('earth', 'img/earth.svg');
		this.game.load.image('coffe_cup', 'img/coffe_cup.svg');
		//Step 2
		this.game.load.image('bg_setp_2', 'img/interior_desing_working_place.svg');
		this.game.load.image('paper', 'img/paper.svg');
		//Step 3
		this.game.load.image('bg_setp_3', 'img/workspace_02.svg');
		this.game.load.image('clock', 'img/clock.svg');
		//Step 4
		this.game.load.image('bg_setp_4', 'img/18.svg');
		this.game.load.image('photo', 'img/photo.svg');
		//Step 5
		this.game.load.image('bg_setp_5', 'img/04.svg');
		this.game.load.image('book', 'img/book.svg');
		//Step 6
		this.game.load.image('bg_step_6', 'img/workyspace.svg');
		this.game.load.image('trash', 'img/trash.svg');
		//Step 7
		this.game.load.image('bg_step_7', 'img/workspace2.svg');
		this.game.load.image('apple', 'img/apple.svg');
		//Step 8
		this.game.load.image('bg_step_8', 'img/workspace3.svg');
		this.game.load.image('trophy', 'img/trophy.svg');
		//Step 9
		this.game.load.image('bg_step_9', 'img/workspace4.svg');
		this.game.load.image('frame', 'img/frame.svg');
		//Step 10
		this.game.load.image('bg_step_10', 'img/movil_19.svg');
		this.game.load.image('cam', 'img/cam.svg');
		//Step 11
		this.game.load.image('bg_step_11', 'img/office-desk.svg');
		this.game.load.image('cel', 'img/cel.svg');
		//Step 12
		this.game.load.image('bg_step_12', 'img/girls-room-1.svg');
		//Step 13
		this.game.load.image('bg_step_13', 'img/flat-graphic-designer.svg');
		this.game.load.image('books', 'img/books.svg');
		//Step 14
		this.game.load.image('bg_step_14', 'img/modern.svg');
		this.game.load.image('suitcase', 'img/suitcase.svg');
		//Step 15
		this.game.load.image('bg_step_15', 'img/home-workplace.svg');
		this.game.load.image('books_2', 'img/books_2.svg');
	},
	create: function() {
		this.game.state.start("Home");
	}
}
