'use strict';
var dnd = require('angular-drag-and-drop-lists');
require('angular').module('exb.books.directives', ['dndLists']);

module.exports = [
    require('./util/keypress'),
    require('./util/autofocus'),
    require('./headernav/headernav'),
    require('./filter/filter')
];