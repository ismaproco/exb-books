var module = angular.module('exb.books.directives');

module.exports = module.directive('booksFilter', function(){
    var template = require('../templates/filter.html');
    return {
        restrict: 'E', 
        template: template
    }
});