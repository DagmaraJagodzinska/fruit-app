'use strict';

angular.
  module('fruitList').
  component('fruitList', {
    templateUrl: 'fruit-list/fruit-list.template.html',
    controller: ['Fruit', 
        function FruitListController(Fruit) {
        this.fruits = Fruit.query();
        this.orderProp = 'size';
      }
    ]
  });
