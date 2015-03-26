angular.module('material-cms.login', ['ui.router', 'restangular'])
		
.config(function config($stateProvider) {
    $stateProvider.state('login', {
		url: '/login',
        views: {
            root: {
                controller: 'MaterialCmsLoginCtrl',
                templateUrl: 'templates/admin/auth/login'
            }
        },
        data: {
            pageTitle: 'Login page'
        }
	});
})

.controller('MaterialCmsLoginCtrl', function($scope, Restangular, $mdToast) {
	$scope.user = {};
	
	$scope.login = function() {
		Restangular.one('api/admin/auth/').post('login', {
			login: $scope.user.email,
			password: $scope.user.password
		}).then(function(response) {
			$mdToast.show($mdToast.simple()
				.content($(response.data).find('h1').text())
				.position('top right')
				.hideDelay(5000)
			);
		}, function(response) {
			$mdToast.show($mdToast.simple()
				.content($(response.data).find('h1').text())
				.position('top right')
				.hideDelay(5000)
			);
		});
	}
});