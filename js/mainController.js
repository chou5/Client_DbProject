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
        }).then(function successCallback(response){
            console.log("Http Request / runSQL - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    $scope.selectCus = function(){

        $scope.sqlite_text = 'SELECT * FROM Customer;'
        sendData = {
            'description': 'User click the selectCus link',
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Http Request /selectCus - input :");
        console.log(sendData);


        $http({
            method: "POST",
            url: getIP() + "/selectCus",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / selectCus - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    $scope.selectEmp = function(){

        $scope.sqlite_text = 'SELECT * FROM Employee;'
        sendData = {
            'description': 'User click the selectEmp link',
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Http Request /selectEmp - input :");
        console.log(sendData);


        $http({
            method: "POST",
            url: getIP() + "/selectEmp",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / selectEmp - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    $scope.selectPub = function(){

        $scope.sqlite_text = 'SELECT * FROM Publisher;'
        sendData = {
            'description': 'User click the selectPub link',
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Http Request /selectPub - input :");
        console.log(sendData);


        $http({
            method: "POST",
            url: getIP() + "/selectPub",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / selectPub - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    $scope.selectProd = function(){

        $scope.sqlite_text = 'SELECT * FROM Product;'
        sendData = {
            'description': 'User click the selectProd link',
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Http Request /selectProd - input :");
        console.log(sendData);


        $http({
            method: "POST",
            url: getIP() + "/selectProd",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / selectProd - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    $scope.selectOrd = function(){

        $scope.sqlite_text = 'SELECT * FROM Orders;'
        sendData = {
            'description': 'User click the selectOrd link',
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Http Request /selectOrd - input :");
        console.log(sendData);


        $http({
            method: "POST",
            url: getIP() + "/selectOrd",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / selectOrd - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    $scope.selectInv = function(){

        $scope.sqlite_text = 'SELECT * FROM Invoice;'
        sendData = {
            'description': 'User click the selectInv link',
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Http Request /selectInv - input :");
        console.log(sendData);


        $http({
            method: "POST",
            url: getIP() + "/selectInv",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / selectInv - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    function getRecords(){
        sendData = {
            'description': 'Get table records when user loads query browser page'
        }

        $http({
            method: "POST",
            url: getIP() + "/getRecords",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / getRecords - output : ");
            var result = response.data;
            console.log(result);
            $scope.getRecords = result;
        });
    }

});
