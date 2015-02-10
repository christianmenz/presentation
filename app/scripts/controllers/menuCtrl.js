(function() {
	'use strict'
	
	
	angular.module('app').controller('MenuCtrl', function ($scope, $location, $document, slideShowService) {      
      var vm = this;
            
		vm.visible = false;
		vm.slides = slideShowService.getSlides();
		vm.toggleMenu = toggleMenu;

		////
		
		function toggleMenu() {
    		vm.visible = !vm.visible;
    		$('#container').attr('class',vm.visible ? 'menue-visible' : 'menue-hidden');
		}					 
  });
})();