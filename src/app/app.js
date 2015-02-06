(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function () {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

  angular.module('weather-app', [
  	'ngResource',
  	'ui.router'
  	])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  	$urlRouterProvider
  	.otherwise('/home');

	// Now set up the states
	$stateProvider
	.state('home', {
		url: "/main",
		templateUrl: "main/main.html"
	})

  	$locationProvider.html5Mode(true);
  	//$httpProvider.interceptors.push('authInterceptor');
  })


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
