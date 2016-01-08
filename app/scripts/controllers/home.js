'use strict';

/**
 * @ngdoc function
 * @name onlineStuffApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the onlineStuffApp
 */
angular.module('onlineStuffApp')
  .controller('HomeCtrl', function ($scope, configData) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.vm = {
    	selectedCategory: {},
    	categories: {}
    }
    configData.getCategories()
    .then(function(data){
    	$scope.vm.categories = data;
    	$scope.vm.selectedCategory = $scope.vm.categories[0]
    	console.log('$scope.categories', $scope.vm.categories);
    })

  });
