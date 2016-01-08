'use strict';

/**
 * @ngdoc service
 * @name onlineStuffApp.configData
 * @description
 * # configData
 * Factory in the onlineStuffApp.
 */
angular.module('onlineStuffApp')
  .factory('configData', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      getCategories: getCategories
    };

    function getCategories(){
        var url = '../json/config.json';
        return $http.get(url).then(function(response){
          return response.data.categories;
        });
    }

  });
