// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// require ingredients
// require dishes

var app = angular.module("EatSome", ["ngResource"]);

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

app.controller('AppCtrl', ['$scope','$filter','Ingredient','Dish',
	function ($scope,$filter,Ingredient,Dish) {

		$scope.chosenItems = [];
		$scope.totalCalories = 0;
		$scope.weight = 0

		$scope.ingredients = Ingredient.index();
		$scope.visibleIngredients = function () {
			return $scope.ingredients.slice(1,25);
		}

		$scope.dishes = Dish.index();
		$scope.visibleDishes = function () {
			return $scope.dishes.slice(1,13);
		}

		$scope.sizeClass = function (numSelected) {
			if (numSelected < 300) {
				return "small";
			} else if (numSelected < 600) {
				return "medium";
			} else  {
				return "big";
			}
		}

		$scope.addToChosen = function (item) {
			if ($scope.chosenItems.indexOf(item) == -1) {
	      $scope.chosenItems.push(item);
	    }

	    var arr = $scope.getCorrectArray(item);
	    var itemIndex = $filter('getIndexById')(arr, item.id);
	    arr.splice(itemIndex,1);

  	}

  	$scope.recommendedValues = {
  		carbohydrate: function () {
  			return $scope.totalCalories * 0.4;
  		},
  		protein: function () {
  			return $scope.totalCalories * 0.3;
  		},
  		fat: function () {
  			return $scope.totalCalories * 0.2;
  		}
  	}

  	$scope.getCorrectArray = function (item) {
  		return item.hasOwnProperty("calories") ? $scope.ingredients : $scope.dishes;
  	}
}]);

app.filter('getIndexById', function() {
  return function(input, id) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (+input[i].id == +id) {
        return i;
      }
    }
    return null;
  }
});