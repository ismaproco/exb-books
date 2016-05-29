'use strict';

var controller = ['$scope', function($scope) {
  
  var inputVisible = false;
  $scope.filterCategories = [ ];
  $scope.filterDate = new Date();
  $scope.filterColor = '#AAC4F3';
  $scope.checkEnglish = true;
  $scope.checkGerman = true;


  $scope.categories = [
    {label:'Biography', type:'draggable'},
    {label:'Children\'s Books', type:'draggable'},
    {label:'Garden', type:'draggable'},
    {label:'Health', type:'draggable'},
    {label:'History', type:'draggable'}
  ];

  function categoryFilterExist(item){
    var found = $scope.filterCategories.find(function(element){
      return element.label == item.label;
    });

    if(found) {
      return found;
    } else {
      return false;
    }
  }


  $scope.containerClick = function($event) {
    if(inputVisible === false) {
      $scope.filterCategories.push({type:'input', label:''});
      inputVisible = true;  
    }
  }

  $scope.updateCategory = function(item, text){
    if(categoryFilterExist({label:text})){
      $scope.deleteFilterCategory(item);
      inputVisible = false;
      return false;
    }

    if(item){
      item.label = text;
      item.type = 'created'
      inputVisible = false;    
    }
  }

  $scope.validateDrag = function(event, index, item, external, type) {
    if(categoryFilterExist(item)){
      return false;
    }else {
      return item;
    }
  }

  $scope.deleteFilterCategory = function(item, $event) {
    if( $event ) {
      $event.stopPropagation();
    }

    for (var i = $scope.filterCategories.length - 1; i >= 0; i--) {
      var element = $scope.filterCategories[i];
      if(element.label == item.label) {
        if(element.type == item.type){
          $scope.filterCategories.splice(i, 1);
        }
      }
    }

    if(item.type == 'input' ){
      inputVisible = false;
    }
  }

  /* pickers events */

  $scope.dateChange = function(modelName, newDate) {

    //hide the calendar
    //$scope.$broadcast('hidePicker');
  }

  $scope.colorChange = function($event, color) {

  }

  /* End picker events */

}];

module.exports = controller;
