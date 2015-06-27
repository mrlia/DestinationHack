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

    $scope.initial = true;
    $scope.citySelected = false;
    $scope.attractionsSelected = false;

    $scope.setInitial = function () {
		$scope.initial = true;
	    $scope.citySelected = false;
	    $scope.attractionsSelected = false;    	
    }

    $scope.selectCity = function () {
		$scope.initial = false;
	    $scope.citySelected = true;
	    $scope.attractionsSelected = false;    	
    }

    $scope.selectAttractions = function () {
		$scope.initial = false;
	    $scope.citySelected = false;
	    $scope.attractionsSelected = true;    	
    }
}]);