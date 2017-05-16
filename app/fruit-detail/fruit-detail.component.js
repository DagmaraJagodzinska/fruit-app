'use strict';

angular.
  module('fruitDetail').
  component('fruitDetail', {
    templateUrl: 'fruit-detail/fruit-detail.template.html',
    controller: ['$http', '$routeParams',
      function FruitDetailController($http, $routeParams) {
        var self = this;

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        $http.get('fruits/' + $routeParams.fruitId + '.json').then(function(response) {
          self.fruit = response.data;
          self.setImage(self.fruit.images[0]);
        });
      }
    ]
  });