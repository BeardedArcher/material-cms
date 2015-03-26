angular.module('material-cms', [
	'material-cms.login',
	'ui.router'
])

.config(function($locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
	
	$urlRouterProvider.otherwise('/');
})

.run(function() {

})

.controller('AppCtrl', function() {

});