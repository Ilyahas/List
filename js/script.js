var app = angular.module("shopList", []);
app.controller("shopListCtrl", function($scope){
    $scope.products = [];

    $scope.addItem = function(){
        $scope.errorText = "";
        $scope.products[$scope.products.length] = {text: $scope.newItem, bought: false};
        $scope.newItem = "";
    };
    $scope.removeItem = function(x){
        $scope.products.splice(x, 1);
    };
    $scope.bought = function(x){
        $scope.products[x].bought = !($scope.products[x].bought);
    }
});