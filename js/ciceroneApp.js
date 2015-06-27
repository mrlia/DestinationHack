var ciceroneApp = angular.module('ciceroneApp', ['ngRoute']);

ciceroneApp.controller('CitiesController', ['$scope', function($scope, route) {
	$scope.cities = [
        {name:'London',enabled:true},
        {name:'Madrid',enabled:false},
        {name:'Prague',enabled:false}
    ];
}]);