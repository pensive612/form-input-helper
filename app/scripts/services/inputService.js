'use strict';

angular.module('formInputHelperApp')
  .factory('inputService', function ($http) {

    var url = 'data/inputs.json';

    var getInputs = {
      getInputs: function() {
        var promise = $http.get(url).then(function (response) {
          return response.data;
        });
        return promise;
      }
    };

    // Public API here
    return getInputs;
  });
