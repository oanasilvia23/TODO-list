
var app = angular.module('ToDo', []);
app.controller('ToDoCtrl', function($scope, $window){
	
	$scope.newTodo = '';
	$scope.message  ='';
	$scope.todos = [
	    'Learn Sketch', 
	    'Look at Dribbble and feel inferior',
	    'Actually learn how to use the Pen tool',
	    'Do something with your life',
	    'Buy milk and bread'
 	];
 	$scope.donetodos=[
 		'Learn HTML',
 		'Buy chair'
 	];
 	
 	$scope.users = [
 		{username: 'oana', password:'oana123'},
 		{username: 'teo', password:'teo28'},
 		{username: 'adi', password:'adrian'}
 	];
 	
 	$scope.login = function(user, pwd) {
 		$scope.message = '';
 		for (var i=0; i < $scope.users.length; i++) {
		   if(user === $scope.users[i].username && pwd === $scope.users[i].password){
		       $window.location.href = '../html/flipbook_v1.html';
		   		$scope.message = '';
		   		return;
		   }
		
		$scope.message = 'Invalid username or password';
		   
		
		 };
 	};
 	
 	$scope.done = function(todo) {
 		var indexOf = $scope.todos.indexOf(todo);
 		if(indexOf !== -1){
 			$scope.todos.splice(indexOf,1);
 		}
 		$scope.donetodos.splice(0,0,todo);
 	}; 
 	
 	$scope.add = function(e) {
	    if (e.which && e.which === 13) {
	      //$scope.todos.push($scope.newTodo);
	      $scope.todos.splice(0, 0, $scope.newTodo);
	      $scope.newTodo = '';
	    }
  	}; 
  	
  	
  	
});