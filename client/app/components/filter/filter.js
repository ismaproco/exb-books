'use strict';
require('./filter.less');

var module = angular.module('exb.books.directives');

module.exports = module.directive('booksFilter', function(){
    var template = require('./filter.html');
    var controller = require('./filter.controller.js');
    return {
        restrict: 'E', 
        template: template,
        controller: controller
    }
});