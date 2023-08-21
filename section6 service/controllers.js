//function ($scope, todoStorage) 컨트롤러에 di하는 곳
angular.module('todo').controller('TodoCtrl', function ($scope, todoStorage) {

    $scope.todos = todoStorage.get();

    $scope.remove = function (todo) {
        todoStorage.remove(todo)

    }

    $scope.add = function (newTodoTitle) {
        todoStorage.add(newTodoTitle)
    }

        $scope.newTodoTitle = ""

});