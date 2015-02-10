(function() {
	'use strict'
	
	angular.module('app').factory('slideShowService', function() {
	
		var data = [  
			{label: 'welcome', url: 'views/slides/start.html'},
 			{label: 'what is Docker', url:'views/slides/what-is-docker.html'},
			{label: 'use cases', url:'views/slides/use-cases.html'}	
		];
				
		var service = {
			getSlides : getSlides
		}		
		
		return service;
		
		/////// 
		
		function getSlides() {
			return data;
		}
	});
	
})();