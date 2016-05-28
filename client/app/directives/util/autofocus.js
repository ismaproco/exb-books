'use strict';

var module = angular.module('exb.books.directives');

module.exports = module.directive('autoFocus', function($timeout) {
  return {
    link: function ( scope, element, attrs ) {
        $timeout( function () { element[0].focus(); } );
    }
  };
});