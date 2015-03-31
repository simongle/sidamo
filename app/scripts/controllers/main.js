'use strict';

/**
 * @ngdoc function
 * @name sidamoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sidamoApp
 */
(function() {
	angular.module('sidamoApp')
	  .controller('MainCtrl', ['$http', '$scope', 'geolocation', function ($http, $scope, geolocation) {
			geolocation.getLocation().then(function(data){
				$scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
			});
			var result = this;
	    result.cafes = [ ];
	    $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7588,-73.9680&radius=2000&keyword=cafe&key=API_KEY').success(function(data){
				result.cafes = data.results;
	    });		
	  }]);
})();
