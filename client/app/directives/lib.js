'use strict';
/* import the drag and drop lib */
require('angular-drag-and-drop-lists');

/* import the datepicker */
require('front-angular-datepicker');
require('front-angular-datepicker/dist/angular-datepicker.css');

// import the colorpicker
require('angularjs-color-picker');
require('angularjs-color-picker/dist/angularjs-color-picker.min.css');

require('angular').module('exb.books.directives', ['dndLists','datePicker','color.picker']);


module.exports = [
    require('./util/keypress'),
    require('./util/autofocus'),
    require('./headernav/headernav'),
    require('./filter/filter'),
    require('./booklist/booklist')
];