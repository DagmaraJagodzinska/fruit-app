'use strict';

angular.
  module('fruitDetail').
  component('fruitDetail', {
    templateUrl: 'fruit-detail/fruit-detail.template.html',
    controller: ['$routeParams', 'Fruit',
      function FruitDetailController($routeParams, Fruit) {
        var self = this;
        self.fruit = Fruit.get({fruitId: $routeParams.fruitId}, function(fruit) {
          self.setImage(fruit.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });