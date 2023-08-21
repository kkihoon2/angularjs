//오직 데이터 조작 controller에 주입

angular.module('todo').factory('todoStorage',function (){//service 만드는 함수 service factory provider 결과는 같음 서비스를 정의하는 방법이 다름
    var TODO_DATA = 'TODO_DATA';
    var storage = {
    //todo ...
    todos : [],
    //언더바로 시작되는것 private임 요기서만 사용됨 controller에서 사용불가능 언어적 강제성은 없음
    _saveToLocalStorage: function (data) {
        localStorage.setItem(TODO_DATA, JSON.stringify(data))//string뿐이 안되서 배열은 곤란
    },
    _getFromLocalStorage: function (){
        return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },

    get : function(){
        //storage.todos=storage._getFromLocalStorage()   ㄱ
        angular.copy(storage._getFromLocalStorage(),storage.todos)
        return storage.todos;
    },

    remove: function (todo){
        var idx =storage.todos.findIndex(function (item) {
            return item.id === todo.id
        })
        if (idx > -1) {
            storage.todos.splice(idx, 1)
            storage._saveToLocalStorage(storage.todos)
        }
        alert();
    },

    add: function (newTodoTitle){
        //crete new todo
        var newTodo = {
            title: newTodoTitle,
            completed: false,
            createdAt: Date.now()
        }

        storage.todos.push(newTodo)
        //localstorage에 저장
        storage._saveToLocalStorage(storage.todos)
    }
}

    return storage
})

