angular.module('material-cms.login', ['ui.router'])
		
.config(function config($stateProvider) {
    $stateProvider.state('login', {
		url: '/login',
        views: {
            root: {
                controller: 'MaterialCmsLoginCtrl',
                templateUrl: 'src/login/login.tpl.html'
            }
        },
        data: {
            pageTitle: 'Login page'
        }
	});
})

.controller('MaterialCmsLoginCtrl', function() {
	
});