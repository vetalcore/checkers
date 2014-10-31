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

	function mainCtrl(boardObject, gameObject, Checkers, King){
		var game = this;
		game.board = boardObject.board;
		game.score = gameObject.score.boardState;
		game.walking = {
			color: 'white',
			checkerMustGo : false,
		};
		game.res = {
			white: 12,
			black:12
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

		game.makeTurn = function(event){
			
			console.log('in start');
			var elementIndex = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);
			console.log(elementIndex);
			
			
			game.score.turns = gameObject.score.turns;

			if(game.score[elementIndex] && game.score[elementIndex].color == game.walking.color) {
				console.log('in select');
				if( 'x' in window && game.score[elementIndex].possibleMoves.length ) {
				 	Array.prototype.forEach.call(document.querySelectorAll( game.score[elementIndex].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.style.background = 'none';});
					game.score[elementIndex].clearPossibleMoves();
				}
				x = elementIndex; 
				game.score[elementIndex].clearPossibleMoves();
				//[elementIndex+7, elementIndex+9, elementIndex-7, elementIndex-9].forEach(function(x,i){if(!game.score[x] && x > elementIndex){arr.push(x); return false;} else if(game.score[x] && game.score[x] !== game.score[elementIndex] && !game.score[x+x-elementIndex]) arr.push(x+x-elementIndex); })
				//Array.prototype.forEach.call(document.querySelectorAll('.some-directive:nth-of-type('+(game.score[x] == 'x' ? (game.score[x-9] == 'x' ? -1 : x-8) : (game.score[x+9] == 'o' ? -1 : x+10))+'),.some-directive:nth-of-type('+(game.score[x] == 'x' ? (game.score[x-7] == 'x' ? -1 : x-6) : (game.score[x+7] == 'o' ? -1 : x+8))+')'),function(x){x.style.background = 'red';});
				//console.log(game.score[elementIndex],x, x+9,game.score[x+9],x+7,game.score[x+7]);
				game.score[elementIndex].setPossibleMoves(elementIndex, game.score);
				//console.log(game.score[elementIndex].possibleMoves ); 
				if( game.score[elementIndex].possibleMoves.length )Array.prototype.forEach.call(document.querySelectorAll( game.score[elementIndex].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.style.background = 'red';});
				//console.log(Checker.possibleMoves);
				//console.log('posiible:',game.score[x].possibleMoves);

			}
			else if('x' in window && x && game.score[x].possibleMoves.indexOf(elementIndex) > -1) { 
				console.log('in move: ', elementIndex,' , ', x);
				Array.prototype.forEach.call(document.querySelectorAll( game.score[x].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){console.log(x); x.style.background = 'none';});
				
				//console.log('posiible:',game.score[x].possibleMoves);//console.log([x+8, x+6]);
				game.score[elementIndex] = game.score.splice(x, 1, game.score[elementIndex])[0];
				if([7, 9, -7, -9].indexOf((elementIndex-x)/2) > -1) { 
					console.log('in beat');
					game.score[x + (elementIndex-x)/2] = '';
					game.score[elementIndex].setPossibleMoves(elementIndex, game.score);
					var counts = {};
					//console.log()
					game.score.forEach(function(element){ if(element)counts[element.color] = (counts[element.color] || 0) + 1;});
					game.res = counts;
					//console.log(counts)
					//console.log(game.score[elementIndex].possibleMoves);
					if(game.score[elementIndex].possibleMoves.length) {
						if(game.score[x].possibleMoves.length) Array.prototype.forEach.call(document.querySelectorAll( game.score[x].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){console.log(x); x.style.background = 'none';});
						Array.prototype.forEach.call(document.querySelectorAll( game.score[elementIndex].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){console.log(x); x.style.background = 'red';});
						game.walking.checkerMustGo = elementIndex;
					}
					else { 
						game.walking.color = ['black', 'white'][['white', 'black'].indexOf(game.walking.color)];
					}
				}
				else {
					game.walking.color = ['black', 'white'][['white', 'black'].indexOf(game.walking.color)];
				}

				

				//game.score[2] = King.getKingInstance(Checkers.getCheckerInstance('sraka'));
				//console.log(game.score[0].color, x);
				//console.log((elementIndex-x)/2 in [7, 9, -7, -9],(elementIndex-x)/2);
				//Array.prototype.forEach.call(document.querySelectorAll('.some-directive:nth-of-type('+(game.score[elementIndex] == 'x' ? x-8 : x+10)+'),.some-directive:nth-of-type('+(game.score[elementIndex] == 'x' ? x-6 : x+8)+')'),function(x){x.style.background = 'none';});
				x = 0;
				//console.log('posiible:',game.score[x].possibleMoves);
			}
			else if( 'x' in window && x && game.score[x].possibleMoves.length ) {
				console.log('in end');
				//console.log(x);
				 Array.prototype.forEach.call(document.querySelectorAll( game.score[x].possibleMoves.reduce(function(a,b){ return a+'.some-directive:nth-of-type('+(b+1)+'),';},'').slice(0, -1)),function(x){ x.style.background = 'none';});
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
			Checker.prototype.direction = color == 'white' ?  -1 : 1;
			Checker.prototype.possibleMoves = [];
			Checker.prototype.setPossibleMoves = function(index, board){
				//console.log(board);
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

	// function King(){

	// }
	// King.prototype = Object.create(Checkers.prototype);

	// mainCtrl.prototype.someObj = { };
	

	// function otherCtrl(){}
	// otherCtrl.prototype = Object.create(mainCtrl.prototype);
	
	// function firstService(){
	// 	this.methods = function(){

	// 	};
	// }

	function gameObject(Checkers){
		this.score = {
		 	boardState : ['',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'','',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'',Checkers.getCheckerInstance('white'),'','','','','','','','','','','','','','','','',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'','',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black'),'',Checkers.getCheckerInstance('black')],
		 	boardScore : { 'x' : 0, 'o' : 0},
		 	turns : 0,
		}
		this.players  = { 0: 'x', 1:'o'};
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
			  	'<span content class="{{game.score[$index].color}}"></span>',
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
		.module('app',[])
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