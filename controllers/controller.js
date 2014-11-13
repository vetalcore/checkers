// t = Array.apply(null,Array(3)).map(function(x,i){ return 3+(7*(i+1))}).forEach(function(x,i){ if(a[x] == 'o') {console.log('=o'); return;} console.log(x) })

// StopIteration = new Error("StopIteration");
// try{
// 	Array.apply(null,Array(3)).map(function(x,i){ return 3+(7*(i+1))}).forEach(function(x,i){ if(a[x] == 'o') { throw StopIteration; } p.push(x) })
// }
// catch(e){
// 	if(e !== StopIteration) throw e;
// }



(function(){
	angular.module('app', ['ang-drag-drop']);

	function mainCtrl(boardObject, gameObject, Checkers, King){
		var game = this;
		game.board = boardObject.board;
		game.score = gameObject.score.boardState;
		game.savedGames = gameObject.savedGames;
		console.log(game.savedGames);
		// game.walking = {
		// 	color: 'white',
		// 	checkerMustGo : false,
		// };
		game.res = {
			white: 12,
			black: 12
		};

		game.mouseMove = function(e){
			document.getElementsByClassName('starter')[0].style.textShadow = (document.body.clientWidth/2 - e.clientX || e.pageX)*.05 +'px '+(document.body.clientHeight/2 - e.clientY || e.pageY)*.05+'px 5px white, 0px 0px 5px white';
			//console.log(document.body.clientWidth);
		}

		game.startNewGame = function(){
			game.score = ['',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'','',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'','','','','','','','','','','','','','','','',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'','',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white')];
			document.getElementsByClassName('board')[0].className += " rollIn";
		}

		game.saveGame = function(){
			game.savedGames.push({boardState: game.score, time: new Date});
			console.log(game.savedGames);
		}

		game.restoreGame = function(gameIndex){
			game.score = game.savedGames[gameIndex].boardState;
		}

		game.showHistory = function(){
			document.getElementsByClassName('history')[0].className = "history active";
			document.getElementsByClassName('content')[0].className += " blured";
		}

		game.exitHistory = function(){
			document.getElementsByClassName('history')[0].className += " exit";
			document.getElementsByClassName('content')[0].className = "content";
		}

		game.dragStart = function(e,elementIndex){
      //    	game.score[elementIndex].setPossibleMoves(elementIndex, game.score);
    		// if( game.score[elementIndex].possibleMoves && game.score[elementIndex].possibleMoves.length )Array.prototype.forEach.call(document.querySelectorAll( game.score[elementIndex].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.firstChild.className = "shadow_checker ";});
      	};
      
      	game.onDrop = function(event,elementIndex, draggedElementIndex){
           	// if(game.score[draggedElementIndex].possibleMoves && game.score[draggedElementIndex].possibleMoves.indexOf(elementIndex) > -1) {
          		// if(game.score[draggedElementIndex].possibleMoves.length) Array.prototype.forEach.call(document.querySelectorAll( game.score[draggedElementIndex].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){console.log(x); x.firstChild.className = '';});
          		// game.score[elementIndex] = game.score.splice(draggedElementIndex, 1, game.score[elementIndex])[0];
           	// 	console.log(game.score[draggedElementIndex]);
           	// }
      	};
		// game.hover = function(a,e){
		// 	//console.log(a);
		// 	//console.log(document.querySelectorAll('.some-directive:nth-of-type('+a+'),.some-directive:nth-of-type('+(a+1)+')'));
			
		// }

		// game.leave = function(a,e){
			
		// }

		// game.chooseSide = function(event){
		// 	console.log(event.target.value);
		// }
		game.makeTurn = function(event, elementIndex){
			//var elementIndex = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);
		
			game.score.turns = gameObject.score.turns;

			if(game.score[elementIndex]  /*&& game.score[elementIndex].color == game.walking.color*/  ) {
				console.log('in select');
				if( 'x' in window && x &&  game.score[x].possibleMoves && game.score[x].possibleMoves.length ) {
				 	Array.prototype.forEach.call(document.querySelectorAll( game.score[x].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.firstChild.className = ''; });
					game.score[x].clearPossibleMoves();
				}
				x = elementIndex; 
				game.score[elementIndex].clearPossibleMoves();
				game.score[elementIndex].setPossibleMoves(elementIndex, game.score);
				if( game.score[elementIndex].possibleMoves.length )Array.prototype.forEach.call(document.querySelectorAll( game.score[elementIndex].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.firstChild.className = "shadow_checker ";});


			}
			else if('x' in window && x && game.score[x].possibleMoves.indexOf(elementIndex) > -1) { 
				console.log('in move: ', elementIndex,' , ', x);
				Array.prototype.forEach.call(document.querySelectorAll( game.score[x].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){/*console.log(x); x.style.background = 'none';*/ x.firstChild.className = "";});
				
				game.score[elementIndex] = game.score.splice(x, 1, game.score[elementIndex])[0];
				if([7, 9, -7, -9].indexOf((elementIndex-x)/2) > -1) { 
					console.log('in beat');
					game.score[x + (elementIndex-x)/2] = '';
					//game.score[elementIndex].setPossibleMoves(elementIndex, game.score);
					var counts = {};
					game.score.forEach(function(element){ if(element)counts[element.color] = (counts[element.color] || 0) + 1;});
					game.res = counts;
					// if(game.score[elementIndex].possibleMoves.length) {
					// 	if(game.score[x].possibleMoves && game.score[x].possibleMoves.length) Array.prototype.forEach.call(document.querySelectorAll( game.score[x].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){console.log(x); x.style.background = 'none';});
					// 	Array.prototype.forEach.call(document.querySelectorAll( game.score[elementIndex].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){console.log(x); x.style.background = 'red';});
					// 	game.walking.checkerMustGo = elementIndex;
					// }
					// else { 
					// 	game.walking.color = ['black', 'white'][['white', 'black'].indexOf(game.walking.color)];
					// }
				}
				// else {
				// 	game.walking.color = ['black', 'white'][['white', 'black'].indexOf(game.walking.color)];
				// }

				x = 0;

			}
			else if( 'x' in window && x && game.score[x].possibleMoves.length ) {
				console.log('in end');
				 Array.prototype.forEach.call(document.querySelectorAll( game.score[x].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.firstChild.className = ''; });
				game.score[x].clearPossibleMoves();
			}
		}
	}
	mainCtrl.$inject = ['boardObject', 'gameObject', 'Checkers', 'King'];
	function Checkers(){		
		this.getCheckerInstance = function(color){
			function Checker(color){
				this.color = color;
			}
			Checker.prototype.figure = color == 'white' ? 'o' : 'x';
			Checker.prototype.direction = color == 'white' ?  1 : -1;
			Checker.prototype.possibleMoves = [];
			Checker.prototype.setPossibleMoves = function(index, board){
			    var self = this;
				[index+7, index+9, index-7, index-9].forEach(function(x,i){if(!board[x] && ((index - x) * self.direction) >= 0 && (index/Math.sqrt(board.length+1) | 0)  == (x/Math.sqrt(board.length+1) | 0) + self.direction){self.possibleMoves.push(x); console.log('push x:',x); return false; } else if(board[x] && 'color' in board[x] && board[x].color !== board[index].color && !board[x+x-index] && [((x+x-index)/Math.sqrt(board.length+1) | 0) + 2*self.direction, ((x+x-index)/Math.sqrt(board.length+1) | 0) - 2*self.direction].indexOf((index/Math.sqrt(board.length+1) | 0)) > -1){ self.possibleMoves.push(x+x-index);console.log('push x+x-index:',x+x-index); } });
			}
			Checker.prototype.clearPossibleMoves = function(){ this.possibleMoves = []; }
			Checker.prototype.getBeatenCheckers = function(){}
			return new Checker(color);
		}
		return this;
	}
	
	function King(){		
		this.getKingInstance = function(checker){
			function King(){
				//return Object.create(checker);
			}
			King.prototype = Object.create(checker);
			// King.prototype.direction = [-1,1];
			King.prototype.setPossibleMoves = function(index, board){
				//console.log(board.map(function(x,i){return i; }));
				console.log(board.map(function(x,i){return i; }));
			    var self = this;
				self.possibleMoves = board.map(function(x,i){return i; }).filter(function(a,k){ return [7,-7].some(function(y){return !((a - index)%y) && (a%Math.sqrt(board.length+1)) * (-1) >= (a%Math.sqrt(board.length+1) - index%Math.sqrt(board.length+1)) * (Math.sqrt(board.length+1) - Math.abs(y)) ;}); });
			} 
			return new King(checker);
		}
		return this;
	}

	// function LocalStorageObject(){
	// 	// this.LSObject = {
	// 	// 	header :
	// 	// }
	// 	this.lololo = [
	// 	{header: 		}
	// 	];
	// }

	function gameObject(Checkers){
		this.score = {
		 	boardState : ['',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'','',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'','','','','','','','','','','','','','','','',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'','',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white')],
		 	boardScore : { 'x' : 0, 'o' : 0},
		 	turns : 0,
		}
		this.players  = { 0: 'x', 1:'o'};
		this.savedGames = [];
		return this;
	}
	this.$inject = ['Checkers'];
	function boardObject(gameObject){
		var obj = {};
		obj.boardLength;
		obj.board = Array.apply(null, Array(obj.boardLength || 64)).map(function(x,i){ return i;});
		obj.setBoardSize = function(length){ obj.boardLength = length };
		return obj;
	}



	function someDirective(gameObject) {
		return {
			restrict: 'EA',
	        replace: true,
	        transclude: true,
	        link: function (scope, element, attrs) {
	        	element.on('click', function () {
		      	});
		    },
			template: [
			  	'<div class="some-directive">',
			  	'<span ui-draggable="true" drag="$index" class="{{game.score[$index].color}}" ng-mousedown="game.dragStart($event,$index)"></span>',
			    '</div>'
			].join('')
		};
	}
	someDirective.$inject = ['gameObject'];
	// function someFilter(){
	// 	return function(items){
	// 		return items.filter(function(item){
	// 			return /^a/i.test(item.name);
	// 		});
	// 	};
	// }

	angular
		.module('app')
		.controller('mainCtrl', mainCtrl)
		// .controller('otherCtrl', otherCtrl)
		.factory('boardObject', boardObject)
		.factory('gameObject', gameObject)
		.factory('Checkers', Checkers)
		.factory('King', King)
		.directive('someDirective', someDirective);
		// .filter('someFiler', someFilter);
})();


////using resolve in routeProvider
// recommended
// function MainCtrl (SomeService) {
//   this.something = SomeService.something;
// }

// MainCtrl.resolve = {
//   doSomething: function (SomeService) {
//     return SomeService.doSomething();
//   }
// };

// function config ($routeProvider) {
//   $routeProvider
//   .when('/', {
//     templateUrl: 'views/main.html',
//     controllerAs: 'vm',
//     controller: 'MainCtrl'
//     resolve: MainCtrl.resolve
//   });
// }