'use strict';

angular.
  module('fruitsApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/fruits', {
          template: '<fruit-list></fruit-list>'
        }).
        when('/fruits/:fruitId', {
          template: '<fruit-detail></fruit-detail>'
        }).
        otherwise('/fruits');
    }
  ]);
