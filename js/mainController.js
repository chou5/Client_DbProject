var app = angular.module('myApp', []);

app.controller('mainController', function($scope, $http) {

    $scope.userName = "Sherry Chou";
    getRecords()
    $('.tabular.menu .item').tab({history:false});
    $('.copy_link_btn').popup();

    $scope.copy_to_clipbpard = function(obj){
        console.log("Pass the html element to controller.");
        console.log(obj.target.attributes[4].value);
        window.getSelection().addRange(obj.target);
    }


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
        $scope.cus_address = null;
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
            console.log("Http Request / sendCusForm - output :");
            var result = response.data;
            console.log(result);

            $scope.cusForm = result;
        });

    }


    $scope.sendEmpForm = function(){
        sendData = {
            'emp_fname': $scope.emp_fname,
            'emp_lname': $scope.emp_lname,
            'emp_gender': $scope.emp_gender,
            'emp_dob': $scope.emp_dob,
            'emp_phone': $scope.emp_phone,
            'emp_email': $scope.emp_email,
            'emp_title': $scope.emp_title,
            'emp_region': $scope.emp_region,
            'emp_startDate': $scope.emp_startDate,
            'emp_department': $scope.emp_department
        }

        console.log("Httpe Request /sendEmpForm - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendEmpForm",
            data: sendData
        }).then(function(response){
            console.log("Http Request / sendEmpForm - output :");
            var result = response.data;
            console.log(result);

            $scope.empForm = result;
        });

    }

    $scope.sendPubForm = function(){
        $scope.pub_address=null;
        sendData = {
            'pub_name': $scope.pub_name,
            'pub_empId': $scope.pub_empId,
            'pub_address': $scope.pub_address,
            'pub_country': $scope.pub_country,
            'pub_contact_person': $scope.pub_contact_person,
            'pub_email': $scope.pub_email,
            'pub_phone': $scope.pub_phone
        }

        console.log("Httpe Request /sendPubForm - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendPubForm",
            data: sendData
        }).then(function(response){
            console.log("Http Request / sendPubForm - output :");
            var result = response.data;
            console.log(result);

            $scope.pubForm = result;
        });

    }


    $scope.sendProdForm = function(){
        sendData = {
            'prod_name': $scope.prod_name,
            'prod_pubId': $scope.prod_pubId,
            'prod_subModel': $scope.prod_subModel,
            'prod_type': $scope.prod_type,
            'prod_priceUSD': $scope.prod_priceUSD,
            'prod_priceNTD': $scope.prod_priceNTD
        }

        console.log("Httpe Request /sendProdForm - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendProdForm",
            data: sendData
        }).then(function(response){
            console.log("Http Request / sendProdForm - output :");
            var result = response.data;
            console.log(result);

            $scope.prodForm = result;
        });

    }


$scope.sendOrdForm = function(){
        $scope.ord_note=null;
        sendData = {
            'ord_prodId': $scope.ord_prodId,
            'ord_invId': $scope.ord_invId,
            'ord_orderDate': $scope.ord_orderDate,
            'ord_note': $scope.ord_note,
            'ord_amount': $scope.ord_amount,
            'ord_priceNTD': $scope.ord_priceNTD,
            'ord_subStartDate': $scope.ord_subStartDate,
            'ord_subEndDate': $scope.ord_subEndDate
        }

        console.log("Httpe Request /sendOrdForm - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendOrdForm",
            data: sendData
        }).then(function(response){
            console.log("Http Request / sendOrdForm - output :");
            var result = response.data;
            console.log(result);

            $scope.ordForm = result;
        });

    }

    $scope.sendInvForm = function(){
        $scope.inv_note = null;
        sendData = {
            'inv_number': $scope.inv_number,
            'inv_cusId': $scope.inv_cusId,
            'inv_issuedDate': $scope.inv_issuedDate,
            'inv_quarter': $scope.inv_quarter,
            'inv_paymentDate': $scope.inv_paymentDate,
            'inv_note': $scope.inv_note,
            'inv_amountUSD': $scope.inv_amountUSD,
            'inv_amountNTD': $scope.inv_amountNTD
        }

        console.log("Httpe Request /sendInvForm - input : ")
        console.log(sendData);

        $http({
            method: "POST",
            url: getIP() + "/sendInvForm",
            data: sendData
        }).then(function(response){
            console.log("Http Request / sendInvForm - output :");
            var result = response.data;
            console.log(result);

            $scope.invForm = result;
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
            getRecords()   
        });
    }


    $scope.selectTableName = function(table_name){

        var string = 'SELECT * FROM ' + table_name + ';'
        $scope.sqlite_text = string
        sendData = {
            'description': 'User click the selectInv link',
            'sqlite_text': $scope.sqlite_text
        }

        console.log("Http Request /selectTableName - input :");
        console.log(sendData);


        $http({
            method: "POST",
            url: getIP() + "/selectTableName",
            data: sendData
        }).then(function successCallback(response){
            console.log("Http Request / selectTableName - output :");
            var result = response.data;
            console.log(result);
            $scope.requestResult = result;      
        });
    }

    $scope.isVisible = {'subquery': false,
                        'join_table': false,
                        'group_by': false,
                        'other': false};
    $scope.showCode = function(query){
        sendData = {
            'description': 'User click the showCode button',
        }
        console.log("Http Request /showCode - input :");
        console.log(sendData);

        if ($scope.isVisible[query] == false){
            $scope.isVisible[query] = true;
        } else{
            $scope.isVisible[query] = false;
        }

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
