'use strict';

var module = angular.module('exb.books.services');

module.exports = module.service('booksRestService', 
  ['endpoints', '$q', '$http', function(endpoints, $q, $http) {
    var service = this;
    service.books = [];
    
    var _url = endpoints.books;
    console.log(_url);
    var req = {
        method: 'POST',
        url: _url,
        headers: {
            'Content-Type': 'application/json',
            'auth-token': 'ABC'
        },
        data: {
          categories:[],
          languages: [],
          date: new Date(),
          coverColor: '',
          skip: 0
        }
    }
    
    /*
    _data param type definition
    {
      categories [array],
      languages [array],
      date: string,
      coverColor: string,
      skip: number
    }
    */
    service.getBooks = function( _data) {
      console.log(_data);
      req.data = _data || req.data;
      $http(req).then(function(res){
        console.log('this is the response', res);
        service.books = res.data;
      },function(res){
        console.log('ERROR!!!');
      })
    };
}]);
