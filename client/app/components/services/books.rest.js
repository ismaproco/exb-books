'use strict';

var module = angular.module('exb.books.services');

module.exports = module.service('booksRestService', 
  ['endpoints', '$q', '$http', function(endpoints, $q, $http) {
    var service = this;
    service.books = [];
    service.page = 1;
    service.skip = 10;

    var _url = endpoints.books;
    console.log(_url);
    var req = {
        method: 'POST',
        url: _url,
        headers: {
            'Content-Type': undefined
        },
        data: { test: 'test' }
    }

    service.getBooks = function( _data ) {
      req.data = _data;
      $http(req).then(function(res){
        console.log('this is the response', res);
        service.books = res.data;
      },function(res){
        console.log('ERROR!!!');
      })
    };
}]);
