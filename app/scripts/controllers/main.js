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
	  .controller('MainCtrl', ['$http', function ($http) {
	    var result = this;
	    result.cafes = [ ];
	    $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7588,-73.9680&radius=20000&keyword=cafe&key=AIzaSyA_G7RErpJHSQCNKM9Se5VVf9sq7BMqGww').success(function(data){
				result.cafes = data.results;
	    });
	  }]);
})();
