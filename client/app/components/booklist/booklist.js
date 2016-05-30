'use strict';
require('./booklist.less');

var module = angular.module('exb.books.directives');

module.exports = module.directive('booksList', function(){
    var template = require('./booklist.html');
    var controller = require('./booklist.controller.js');
    return {
        restrict: 'E', 
        template: template,
        controller: controller
    }
});

