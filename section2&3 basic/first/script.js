(function (){
    var app = angular.module('todo',[]);

    app.controller('TodoCtrl', ['$scope', function ($scope) {
        $scope.todo = {
            title:'yogagagaga',
            completed: true,
            createdAt: Date.now()
        }
    }]);
})();