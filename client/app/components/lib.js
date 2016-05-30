'use strict';
/* import the drag and drop lib */
require('angular-drag-and-drop-lists');

/* import the datepicker */
require('front-angular-datepicker');
require('front-angular-datepicker/dist/angular-datepicker.css');

// import the colorpicker
require('angularjs-color-picker');
require('angularjs-color-picker/dist/angularjs-color-picker.min.css');

/* module definitions */
var angular = require('angular');
var ngAnimate = require('angular-animate');

angular.module('exb.books.directives', ['dndLists','datePicker','color.picker', 'ngAnimate']);
angular.module('exb.books.services', []);

module.exports = [
    require('./services/endpoints.js'),
    require('./services/books.rest.js'),
    require('./util/keypress'),
    require('./util/autofocus'),
    require('./headernav/headernav'),
    require('./filter/filter'),
    require('./booklist/booklist'),
];