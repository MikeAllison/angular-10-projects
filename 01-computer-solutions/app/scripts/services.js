'use strict';

(function() {

  var app = angular.module('services', []);

  app.directive('serviceItemVert', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/service-item-vert.html'
    };
  });

  app.directive('serviceItemHorz', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/service-item-horz.html'
    };
  });

})();
