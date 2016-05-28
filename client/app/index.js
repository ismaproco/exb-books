/*
    requires
*/
var angular = require('angular');
require('./directives/headernav');

// load the basic styling for the page
require('./styles/style.less');

var ngModule = angular.module('exb.books', ['directives.headernav']);