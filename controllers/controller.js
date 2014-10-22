// t = Array.apply(null,Array(3)).map(function(x,i){ return 3+(7*(i+1))}).forEach(function(x,i){ if(a[x] == 'o') {console.log('=o'); return;} console.log(x) })

// StopIteration = new Error("StopIteration");
// try{
// 	Array.apply(null,Array(3)).map(function(x,i){ return 3+(7*(i+1))}).forEach(function(x,i){ if(a[x] == 'o') { throw StopIteration; } p.push(x) })
// }
// catch(e){
// 	if(e !== StopIteration) throw e;
// }



(function(){
	angular.module('app', []);

	function mainCtrl(boardObject, gameObject, Checker){
		var game = this;
		game.board = boardObject.board;
		game.score = gameObject.score.boardState;
		game.players =  gameObject.players;
		game.gameScore = gameObject.score.boardScore;

		game.hover = function(a,e){
			//console.log(a);
			//console.log(document.querySelectorAll('.some-directive:nth-of-type('+a+'),.some-directive:nth-of-type('+(a+1)+')'));
			
		}

		game.leave = function(a,e){
			
		}

		game.chooseSide = function(event){
			console.log(event.target.value);
		}

		game.makeTurn = function(event){
			
			


			var elementIndex = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);
			console.log(elementIndex);
			
			
			game.score.turns = gameObject.score.turns;

			if(game.score[elementIndex]) {
				console.log('in select');
				if( 'x' in window && Checker.possibleMoves.length ) {
				 	Array.prototype.forEach.call(document.querySelectorAll( Checker.possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.style.opacity = 1;});
					Checker.clearPossibleMoves();
				}
				x = elementIndex; 
				Checker.clearPossibleMoves();
				// arr = [];
				//console.log('set x:'+ x ); 
				//[elementIndex+7, elementIndex+9, elementIndex-7, elementIndex-9].forEach(function(x,i){if(!game.score[x] && x > elementIndex){arr.push(x); return false;} else if(game.score[x] && game.score[x] !== game.score[elementIndex] && !game.score[x+x-elementIndex]) arr.push(x+x-elementIndex); })
				//Array.prototype.forEach.call(document.querySelectorAll('.some-directive:nth-of-type('+(game.score[x] == 'x' ? (game.score[x-9] == 'x' ? -1 : x-8) : (game.score[x+9] == 'o' ? -1 : x+10))+'),.some-directive:nth-of-type('+(game.score[x] == 'x' ? (game.score[x-7] == 'x' ? -1 : x-6) : (game.score[x+7] == 'o' ? -1 : x+8))+')'),function(x){x.style.opacity = 0;});
				//console.log(game.score[elementIndex],x, x+9,game.score[x+9],x+7,game.score[x+7]);
				Checker.setPossibleMoves(elementIndex, game.score);
				if( Checker.possibleMoves.length )Array.prototype.forEach.call(document.querySelectorAll( Checker.possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.style.opacity = 0;});
				//console.log(Checker.possibleMoves);

			}
			else if('x' in window && x && Checker.possibleMoves.indexOf(elementIndex) > -1) { 
				console.log('in move');
				Array.prototype.forEach.call(document.querySelectorAll( Checker.possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){console.log(x); x.style.opacity = 1;});
				//console.log([x+8, x+6]);
				game.score[elementIndex] = game.score.splice(x, 1, game.score[elementIndex])[0];
				if([7, 9, -7, -9].indexOf(elementIndex-x)/2 > -1) game.score[x + (elementIndex-x)/2] = '';
				//console.log((elementIndex-x)/2 in [7, 9, -7, -9],(elementIndex-x)/2);
				//Array.prototype.forEach.call(document.querySelectorAll('.some-directive:nth-of-type('+(game.score[elementIndex] == 'x' ? x-8 : x+10)+'),.some-directive:nth-of-type('+(game.score[elementIndex] == 'x' ? x-6 : x+8)+')'),function(x){x.style.opacity = 1;});
				x = 0;
			}
			else if( 'x' in window && Checker.possibleMoves.length ) {
				 	Array.prototype.forEach.call(document.querySelectorAll( Checker.possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.style.opacity = 1;});
					Checker.clearPossibleMoves();
			}
		}
	}

	function Checker(){
		var self = this;
		self.color = {
			o : {color: 'white', direction: -1},
			x : {color: 'black', direction: 1},
		};		
		self.possibleMoves = [];
		self.setPossibleMoves = function(index, board){	
			console.log((index/Math.sqrt(board.length+1) | 0),self.color[board[index]].direction);
			[index+7, index+9, index-7, index-9].forEach(function(x,i){if(!board[x] && (index - x) * self.color[board[index]].direction >= 0 && (index/Math.sqrt(board.length+1) | 0)  == (x/Math.sqrt(board.length+1) | 0) + self.color[board[index]].direction){self.possibleMoves.push(x); return false;} else if(board[x] && board[x] !== board[index] && !board[x+x-index] && [((x+x-index)/Math.sqrt(board.length+1) | 0) + 2*self.color[board[index]].direction, ((x+x-index)/Math.sqrt(board.length+1) | 0) - 2*self.color[board[index]].direction].indexOf((index/Math.sqrt(board.length+1) | 0)) > -1) self.possibleMoves.push(x+x-index); });
		 };
		self.clearPossibleMoves = function(){ self.possibleMoves = []; };
		self.getBeatenCheckers = function(){};
		return self; 
	}

	function King(){

	}
	King.prototype = Object.create(Checker.prototype);

	mainCtrl.prototype.someObj = { };
	mainCtrl.$inject = ['boardObject', 'gameObject', 'Checker'];

	function otherCtrl(){}
	otherCtrl.prototype = Object.create(mainCtrl.prototype);
	
	function firstService(){
		this.methods = function(){

		};
	}

	function gameObject(){
		this.score = {
		 	boardState : ['','o','','o','','o','','o','o','','o','','o','','o','','','o','','o','','o','','o','','','','','','','','','','','','','','','','','x','','x','','x','','x','','','x','','x','','x','','x','x','','x','','x','','x'],
		 	boardScore : { 'x' : 0, 'o' : 0},
		 	turns : 0
		}
		this.players  = { 0: 'x', 1:'o'};
		return this;
	}

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
		      		var self = this;
		        	console.log();
		        	//self.innerHTML = gameObject.players[gameObject.turns%2];
		      	});
		    },
			template: [
			  	'<div class="some-directive">',
			  	'{{game.score[$index]}}',
			    '</div>'
			].join('')
		};
	}
	someDirective.$inject = ['gameObject'];
	function someFilter(){
		return function(items){
			return items.filter(function(item){
				return /^a/i.test(item.name);
			});
		};
	}

	angular
		.module('app',[])
		.controller('mainCtrl', mainCtrl)
		.controller('otherCtrl', otherCtrl)
		.factory('boardObject', boardObject)
		.factory('gameObject', gameObject)
		.factory('Checker', Checker)
		.directive('someDirective', someDirective)
		.filter('someFiler', someFilter);
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