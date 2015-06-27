var ciceroneApp = angular.module('ciceroneApp', []);

ciceroneApp.controller('CitiesController', ['$scope', function($scope) {
	$scope.cities = [
        {name:'London', enabled:true},
        {name:'Madrid', enabled:false},
        {name:'Prague', enabled:false}
    ];
}]);