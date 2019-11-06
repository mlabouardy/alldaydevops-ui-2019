angular.module('demo', [])
    .controller('MainCtrl', function ($scope, $http) {
        $scope.movie = {};
        $scope.name = '';
        $http.get('https://g9iufmmam1.execute-api.eu-central-1.amazonaws.com/sandbox/search/Gladiator').then(function (resp) {
            $scope.movie = resp.data;
        });
        $http.get('https://g9iufmmam1.execute-api.eu-central-1.amazonaws.com/sandbox/env').then(function (resp) {
            $scope.environment = resp.data.environment;
        });
        $scope.search = function () {
            $http.get('https://g9iufmmam1.execute-api.eu-central-1.amazonaws.com/sandbox/search/' + $scope.name).then(function (resp) {
                $scope.movie = resp.data;
            });
        }
    })



