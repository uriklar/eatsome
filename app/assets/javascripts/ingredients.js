// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var app = angular.module("EatSome", ["ngResource"]);

app.factory('Ingredient', function($resource) {
	return $resource("/ingredients/:id",{ id: "@id"},
		{
			'index': { method: "GET", isArray: true }
		});
});

// app.factory("Contact", function($resource) {
//   return $resource("/api/contacts/:id", { id: "@id" },
//     {
//       'create':  { method: 'POST' },
//       'index':   { method: 'GET', isArray: true },
//       'show':    { method: 'GET', isArray: false },
//       'update':  { method: 'PUT' },
//       'destroy': { method: 'DELETE' }
//     }
//   );
// });

app.controller('IngredientsCtrl', ['$scope','Ingredient',
	function ($scope, Ingredient) {
		$scope.ingredients = Ingredient.index();

		$scope.ingredientSizeClass = function (numSelected) {
			if (numSelected < 100) {
				return "small";
			} else if (numSelected < 200) {
				return "medium";
			} else  {
				return "big";
			}
		}
}]);


app.directive('ingerdientList',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<ul class= "ingredient-list">' +
		 						'<li ng-repeat="ingredient in ingredients" class="{{ingredientSizeClass(ingredient.num_selected)}}">' +
		 							'{{ingredient.name}}' +
		 						'</li>' +
		 					'</ul>' ,
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, elem, attrs) {

		}
	};
});