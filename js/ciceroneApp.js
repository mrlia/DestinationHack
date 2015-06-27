var ciceroneApp = angular.module('ciceroneApp', []);

ciceroneApp.controller('CitiesController', ['$scope', function($scope) {
	$scope.cities = [
        {name:'London', enabled:true},
        {name:'Madrid', enabled:false},
        {name:'Prague', enabled:false}
    ];
	$scope.attractions = [
        {name:'British Museum', enabled:true},
        {name:'Big Ben', enabled:false},
        {name:'Westminster Abby', enabled:false},
        {name:'Buckingham Palace', enabled:false},
        {name:'London Eye', enabled:false}
    ];

    $scope.leftColumn = true;
    $scope.toggle = function () {
    	$scope.leftColumn = !$scope.leftColumn;
    };
}]);