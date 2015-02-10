(function() {
	'use strict';
	
	angular
	  .module('app', [
	    'ngAnimate',
	    'ngCookies',
	    'ngResource',
	    'ngRoute',
	    'ngSanitize',
	    'ngTouch'
	  ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .when('/slide/:index', {
	        templateUrl: 'views/main.html'    
	      })
	      .otherwise({
	        redirectTo: '/slide/0'
	      });
	  });
  })();
  
  
