var module = angular.module('directives.headernav',[]);

module.exports = module.directive('headerNav', function(){
    console.log('Hello this is a new directive');
    return {
        restrict: 'E', 
        templateUrl: '../templates/headernav.html'
    }
});