



// app이 없다! 그렇다면 app대신 angular.module('todo')를 붙여주자
//그리고 html에 <script src=directives.js> 추가
/*todo-title 만들기 이거는 js에서 카멜로 만들어줌*/
angular.module('todo').directive('todoTitle', function () {
    return {
        template: '<h1>todo titlezzz</h1>'
    }
});

/*template에다가 문자열로 변경해서 가져오기*/
angular.module('todo').directive('todoItem', function () {
    return {
        templateUrl : 'todoItem.tpl.html'
        // template: <!--실제 모델도 변경-->
        // <!--ng-model을 양방향 바인드라고 함-->
        //     '<!--실제 모델도 변경-->\n' +
        //     '            <!--ng-model을 양방향 바인드라고 함-->\n' +
        //     '            <input type="text" ng-model="todo.title">\n' +
        //     '\n' +
        //     '            <button class="btn btn-danger" type="DELETE" ng-click="remove(todo)" >Button</button>\n' +
        //     '\n' +
        //     '            <input type="checkbox" ng-model="todo.completed">\n' +
        //     '            <!--datefillter 추가 https://docs.angularjs.org/api/ng/filter/date-->\n' +
        //     '            <date>{{todo.createdAt | date }}</date>\n' +
        //     '            <date>{{todo.createdAt | date : \'yyyy-mm-dd\' }}</date>\n' +
        //     '            <date>{{todo.createdAt | date : \'yyyy-mm-dd HH:mm:ss\' }}</date>'
    }
});

angular.module('todo').directive('todoFilters',function () {
    return{
        templateUrl : 'todoFilters.tpl.html'
    }

})

angular.module('todo').directive('todoForm',function () {
    return{
        templateUrl : 'todoForm.tpl.html'
    }

})