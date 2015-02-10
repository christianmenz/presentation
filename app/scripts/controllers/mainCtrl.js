(function() {
	'use strict';
	
	angular.module('app').controller('MainCtrl', function ($scope, $routeParams, $window, $location, slideShowService)  {  	
	  	var vm = this;
		vm.nextSlide = nextSlide;
		vm.previousSlide = previousSlide;
		vm.slides = slideShowService.getSlides();		
		vm.slide = vm.slides[$routeParams.index];
		vm.slideUrl = vm.slide.url;
		
		$window.onkeydown = keyDownHandler;
		  	
		////  	
		
		function keyDownHandler(event) {
			console.log(event);
			
			if (event.keyCode == 39) {
				nextSlide();
			} else if (event.keyCode == 37) {
				previousSlide();
			} 
			$scope.$apply();
		};
	  	
	  	function nextSlide() {
	  		$('#content').attr('class','forward');  	
	  		var idx = 1 * $routeParams.index + 1;	  			  		
	  		$location.path('slide/' + idx);	  		
	  	}
	  	
	  	function previousSlide() {
			$('#content').attr('class','backward');
	  		var idx = 1 * $routeParams.index - 1;	  						
			$location.path('slide/' + idx);
	  	}
	});
})();