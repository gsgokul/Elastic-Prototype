    (function() {
    'use strict';

    var app = angular.module('app');
    app.service('indexService',
        function ($resource) {
        return $resource('http://172.24.243.25:9200/network/_search?q=:searchText',    { searchText: '@searchText' });
        });
    app.controller('search', function ($scope, $http, indexService) {

        $scope.queryIndex = function () {
            $scope.error = '';
            $scope.totalhits = '';
            $scope.results = '';
            var promise = indexService.get({ searchText: $scope.searchText });
            promise.$promise.then(function (response) {
                    $scope.totalhits = response.hits.total;
                    var results = response.hits.hits;
                    $scope.results = results;
                },
                function(reason) {
                    $scope.error = reason;
                });
        }
    });
})();


/*$http.get("http://172.24.243.25:9200/network/provider/1?pretty")
    .success(function (data) {
        $scope.response = data;
    })
    .error(function (error, status) {
        $scope.error = { message: error, status: status };
        console.log($scope.error.status);
    });*/

//this works
/*$scope
    .response =
    '{"_index":"network","_type":"provider","_id":"1","_version":1,"found":true,"_source":{"id":1,"fullname":"John1 Doe","zip":0,"status":"under contract"}}';*/