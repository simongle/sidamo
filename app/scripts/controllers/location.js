'use strict';

/**
 * @ngdoc function
 * @name sidamoApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the sidamoApp
 */
(function() {
angular.module('sidamoApp')
  .controller('LocationCtrl', function ($scope, geolocation) {
    geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    });
  });
})();
