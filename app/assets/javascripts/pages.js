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
}]);
