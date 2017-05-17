angular.module('core.fruit').
    factory('Fruit', ['$resource',
    function($resource){
        return $resource('fruits/:fruitId.json', {}, {
            query: {
                method: 'GET',
                params: {fruitId: 'fruits'},
                isArray: true
            }
        });
    }]);