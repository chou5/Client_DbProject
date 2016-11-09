var app = angular.module('myApp', []);

app.controller('mainController', function($scope, $http) {

    $scope.userName = "Sherry Chou";

    $('.tabular.menu .item').tab({history:false});


    $scope.getResponse = function() {

        sendData = {
            'description': 'User click the GetRequest button'
        }

        console.log("Http Request /getResponse - input :");
        console.log(sendData);

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

        console.log("Http Request /queryDB - input :");
        console.log(sendData);

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

    $scope.sendForm = function(){
        
        sendData = {
            'first_name':$scope.first_name,
            'last_name':$scope.last_name
        }

        console.log("Http Request /sendForm - input :");
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendForm",
            data: sendData
        }).then(function(response) {

            console.log("Http Request /sendForm - output :");
            var result = response.data;
            console.log(result);

            $scope.requestResult = result;

        });

    }

});
