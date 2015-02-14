(function() {
	'use strict';
	
	angular.module('app').controller('MainCtrl', function ($scope, $routeParams, $window, $location, slideShowService)  {  	
	  	var vm = this;
		vm.slide = slideShowService.getSlides()[$routeParams.index];	
				
		vm.nextSlide = nextSlide;
		vm.previousSlide = previousSlide;
				
		$window.onkeydown = keyDownHandler;
		  	
		////  	
		
		function keyDownHandler(event) {			
			if (event.keyCode == 39) {
				nextSlide();
			} else if (event.keyCode == 37) {
				previousSlide();
			} 
			$scope.$apply();
		};
	  	
	  	function nextSlide() {
	  		var idx = 1 * $routeParams.index + 1;	  			  		
	  		if (idx >= slideShowService.getSlides().length) {
	  			return;
	  		}
	  		
	  		$('#content').attr('class','forward');  	
	  		$location.path('slide/' + idx);	  		
	  	}
	  	
	  	function previousSlide() {
	  		var idx = 1 * $routeParams.index - 1;	  	  		  		
	  		if (idx < 0) {
	  			return;
	  		}

			$('#content').attr('class','backward');
			$location.path('slide/' + idx);
	  	}
	});
})();