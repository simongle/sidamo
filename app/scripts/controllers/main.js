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
	    $http.get('../../data/TESTAPI.json').success(function(data){
				result.cafes = data.results;
				// console.log(data["results"]);
	    });
	  }]);
})();
