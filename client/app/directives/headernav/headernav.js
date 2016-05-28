'use strict';

var module = angular.module('exb.books.directives');

module.exports = module.directive('headerNav', function(){
    var template = require('./headernav.html');
    return {
        restrict: 'E', 
        template: template
    }
});