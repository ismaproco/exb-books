'use strict';

var module = angular.module('exb.books.directives');

module.exports = module.directive('utilKeypress', function () {
    return function (scope, element, attr) {
        element.bind("keydown keypress", function (event) {
            switch(attr.keyCommand){
                case 'enter':
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$text = element.val();
                            scope.$eval(attr.utilKeypress);
                        });
                        event.preventDefault();
                    }
                break;
            }

        });
    };
});