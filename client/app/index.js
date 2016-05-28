/*
    requires
*/
var angular = require('angular');
require('./directives/lib');

// load the basic styling for the page
require('./styles/style.less');

var ngModule = angular.module('exb.books', ['exb.books.directives']);