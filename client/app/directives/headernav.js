var module = angular.module('exb.books.directives');

module.exports = module.directive('headerNav', function(){
    return {
        restrict: 'E', 
        templateUrl: '../templates/headernav.html'
    }
});