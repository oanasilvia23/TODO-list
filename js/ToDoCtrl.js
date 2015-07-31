//initialize our app by creating a module => we declare the model
var app = angular.module('Todo', []);
//create the ctrl
app.controller('ToDoCtrl', function ($scope, $window) {
    $scope.newTodo = '';
    $scope.isFalse = true;
    //set up data on the ctrl
    $scope.todos = ['Learn Sketch',
                    'Look at Dribbble and feel inferior',
                    'Actually learn how to use the Pen tool'
                   ];

    $scope.users = [
   { username: 'oana', password: 'oana123' },
   { username: 'teo', password: 'teo28' },
   { username: 'adi', password: 'adrian' }
    ];

    $scope.done = function (param) {
        $scope.todos.splice($scope.todos.indexOf(param), 1);
    };

    $scope.add = function (e) {
        if (e.which && e.which === 13) {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = '';
        };
    };


    $scope.login = function (user, pwd) {
        $scope.msg ='';
        for (var i = 0; i < $scope.users.length; i++) {
            if (user === $scope.users[i].username && pwd === $scope.users[i].password) {
                $window.location.href = '/Index.html';
                $scope.msg = '';
                return;
            };
            $scope.msg='Invalid user and password';
    	};

	};
});
