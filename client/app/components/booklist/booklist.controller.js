'use strict';

var controller = ['$scope','$animate','booksRestService', function($scope, $animate, booksRestService) {
    var ctrl = this;
    $scope.ctrl = ctrl;

    ctrl.service = booksRestService;

    $scope.$watch('ctrl.service.processing', function(newValue){
        
    });
}];

module.exports = controller;