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