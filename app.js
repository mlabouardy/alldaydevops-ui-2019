angular.module('demo', [])
    .controller('MainCtrl', function ($scope, $http) {
        $scope.movie = {};
        $scope.name = '';
        $http.get('/search/Gladiator').then(function (resp) {
            $scope.movie = resp.data;
        });
        $http.get('/env').then(function (resp) {
            $scope.environment = resp.data.environment;
        });
        $scope.search = function () {
            $http.get('/search/' + $scope.name).then(function (resp) {
                $scope.movie = resp.data;
            });
        }
    })