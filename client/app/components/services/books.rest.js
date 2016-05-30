'use strict';

var module = angular.module('exb.books.services');

module.exports = module.service('booksRestService', 
  ['endpoints', '$q', '$http', function(endpoints, $q, $http) {
    var service = this;
    service.books = [];
    service.numberItems = 0;
    service.processing = false;
    
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
    ** condition
    ** if skip attribute is grater than 0, the response data
    **  will be concatenated to the existing list of books
    */
    service.getBooks = function( _data) {
      service.processing = true;
      req.data = _data || req.data;
      $http(req).then(function(res){
        console.log('response: ', res);
        if(req.data.skip > 0){
          service.books = service.books.concat(res.data.books);

        }else {
          service.books = res.data.books;
        }

        service.numberItems = res.data.totalItems;
        service.processing = false;
      },function(res){
        console.log('ERROR!!!');
        service.processing = false;
      })
    };
}]);
