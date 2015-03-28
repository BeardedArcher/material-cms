angular.module('material-cms', [
	'ngMaterial',
	'material-cms.login',
	'restangular',
	'ui.router'
])

.config(function($locationProvider, $urlRouterProvider, $mdThemingProvider) {
	$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
	
	$urlRouterProvider.otherwise('/');
	
	$mdThemingProvider.theme('docs-dark', 'default')
		.primaryPalette('grey');
})

.run(function(Restangular, $location) {
//	Restangular.setBaseUrl($location.host());
})

.controller('AppCtrl', function() {
});