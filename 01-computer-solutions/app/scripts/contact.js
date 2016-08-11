'use strict';

(function() {

  var app = angular.module('location', []);

  app.directive('locationItem', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/location-item.html'
    };
  });

})();
