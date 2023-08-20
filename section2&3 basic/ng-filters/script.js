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
    }]);
})();