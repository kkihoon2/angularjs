(function () {
    var app = angular.module('todo', []);

    app.controller('TodoCtrl', ['$scope', function ($scope) {
        $scope.todos = [{
            title: 'yogagagaga',
            completed: true,
            createdAt: Date.now()
        }, {
            title: 'angular',
            completed: false,
            createdAt: Date.now()
        },
            {
                title: 'excersise',
                completed: true,
                createdAt: Date.now()
            }]
        $scope.remove = function(todo){
            var idx = $scope.todos.findIndex(function (item) {
                return item.id === todo.id
            })
            if(idx>-1){
                $scope.todos.splice(idx,1)
            }
            alert();

        }
    }]);

})();