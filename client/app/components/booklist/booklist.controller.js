'use strict';

var controller = ['$scope','booksRestService', function($scope, booksRestService) {
    var ctrl = this;
    $scope.ctrl = ctrl;

    console.log(555);
    ctrl.service = booksRestService;

    ctrl.getbooks = function(){
        booksService.getBooks();
    }
}];

module.exports = controller;