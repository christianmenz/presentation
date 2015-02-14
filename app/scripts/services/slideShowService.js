(function() {
	'use strict'
	
	angular.module('app').factory('slideShowService', function() {
	
		var data = [  
			{label: 'welcome', url: 'views/slides/start.html'},
 			{label: 'what is Docker', url:'views/slides/what-is-docker.html'},
			{label: 'use cases', url:'views/slides/use-cases.html'},
			{label: 'developer environment today', url:'views/slides/setup-today.html'},
			{label: 'developer environment with Docker', url:'views/slides/setup-with-docker.html'},
			{label: 'ship software today', url:'views/slides/ship-today.html'},
			{label: 'ship software with Docker', url:'views/slides/ship-with-docker.html'},
			{label: 'fibu3', url:'views/slides/fibu3.html'},
			{label: 'run a container', url:'views/slides/cmd-run.html'},
			{label: 'dockerfile', url:'views/slides/dockerfile.html'},
			{label: 'build an image', url:'views/slides/cmd-build.html'},
			{label: 'live demo', url:'views/slides/live-demo.html'}	
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