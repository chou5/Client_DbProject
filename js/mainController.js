var app = angular.module('myApp', []);

app.controller('mainController', function($scope, $http) {

    $scope.userName = "Sherry Chou";

    $('.tabular.menu .item').tab();

    $scope.getResponse = function() {

        sendData = {
            'description': 'User click the GetRequest button'
        }

        $http({
            method: "POST",
            url: getIP() + "/getResponse",
            data: sendData
        }).then(function(response) {

            console.log("Http Request /getResponse - output :");
            var result = response.data;
            console.log(result);

            $scope.requestResult = result;

        });

    }

    $scope.queryDB = function() {

        sendData = {
            'description': 'User click the Query DB button'
        }

        $http({
            method: "POST",
            url: getIP() + "/queryDB",
            data: sendData
        }).then(function(response) {

            console.log("Http Request /queryDB - output :");
            var result = response.data;
            console.log(result);

            $scope.requestResult = result;

        });

    }

});