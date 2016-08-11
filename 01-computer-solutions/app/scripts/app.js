'use strict';

(function() {

  var app = angular.module('ComputerSolutionsApp', ['ngRoute', 'services', 'location']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'company'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'company'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'MainCtrl',
        controllerAs: 'company'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl',
        controllerAs: 'company'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();
