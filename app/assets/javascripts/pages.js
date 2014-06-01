// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// require ingredients
// require dishes

var app = angular.module("EatSome", ["ngResource"]);

app.controller('AppCtrl', ['$scope',
	function ($scope) {

		$scope.chosenItems = [];

		$scope.sizeClass = function (numSelected) {
			if (numSelected < 100) {
				return "small";
			} else if (numSelected < 200) {
				return "medium";
			} else  {
				return "big";
			}
		}

		$scope.addToChosen = function (item) {
			if ($scope.chosenItems.indexOf(item) == -1) {
	      $scope.chosenItems.push(item);
	    }
  	}
}]);

app.factory('Ingredient', function($resource) {
	return $resource("/ingredients/:id.json",{ id: "@id"},
		{
			'index': { method: "GET", isArray: true }
			// 'create':  { method: 'POST' },
   //    'show':    { method: 'GET', isArray: false },
   //    'update':  { method: 'PUT' },
   //    'destroy': { method: 'DELETE' }
		});
});

app.controller('IngredientsCtrl', ['$scope','Ingredient',
	function ($scope, Ingredient) {
		$scope.ingredients = Ingredient.index();
}]);

app.factory('Dish', function($resource) {
	return $resource("/dishes/:id.json",{ id: "@id"},
		{
			'index': { method: "GET", isArray: true }
			// 'create':  { method: 'POST' },
   //    'show':    { method: 'GET', isArray: false },
   //    'update':  { method: 'PUT' },
   //    'destroy': { method: 'DELETE' }
		});
});

app.controller('DishesCtrl', ['$scope','Dish',
	function ($scope, Dish) {
		$scope.dishes = Dish.index();
}]);
