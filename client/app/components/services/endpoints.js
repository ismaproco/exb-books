'use strict';

var module = angular.module('exb.books.services');

module.exports = module.service('endpoints', [ function() {
  this.books = 'http://localhost:3000/api/books/filter';
}]);