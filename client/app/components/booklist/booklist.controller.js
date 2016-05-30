'use strict';

var controller = ['$scope','$animate','booksRestService', function($scope, $animate, booksRestService) {
    var ctrl = this;
    $scope.ctrl = ctrl;

    ctrl.service = booksRestService;
}];

module.exports = controller;