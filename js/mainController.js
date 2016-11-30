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

    $scope.sendCusForm = function(){
        sendData = {
            'cus_name': $scope.cus_name,
            'cus_contact_person': $scope.cus_contactPerson,
            'cus_email': $scope.cus_email,
            'cus_phone': $scope.cus_phone,
            'cus_address': $scope.cus_address,
            'cus_region': $scope.cus_region,
            'cus_empId': $scope.cus_empId
        }

        console.log("Httpe Request /sendCusForm - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendCusForm",
            data: sendData
        }).then(function(response){
            console.log("Http Request / sendForm - output :");
            var result = response.data;
            console.log(result);

            $scope.requestResult = result;
        });

    }


    $scope.sendEmpForm = function(){
        sendData = {
            'cus_name': $scope.cus_name,
            'cus_contact_person': $scope.cus_contactPerson,
            'cus_email': $scope.cus_email,
            'cus_phone': $scope.cus_phone,
            'cus_address': $scope.cus_address,
            'cus_region': $scope.cus_region,
            'cus_empId': $scope.cus_empId
        }

        console.log("Httpe Request /sendCusForm - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendCusForm",
            data: sendData
        }).then(function(response){
            console.log("Http Request / sendForm - output :");
            var result = response.data;
            console.log(result);

            $scope.requestResult = result;
        });

    }


    $scope.runSQL = function(){
        sendData = {
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Httpe Request /runSQL - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/runSQL",
            data: sendData
        }).then(function(response){
            console.log("Http Request / runSQL - output :");
            var result = response.data;
            console.log(result);


            $scope.requestResult = result;
        
        });
    }


});
