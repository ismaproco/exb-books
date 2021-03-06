'use strict';

var controller = ['$scope', '$timeout' ,'booksRestService', function($scope, $timeout, booksRestService) {
  
  var inputVisible = false, oldData;
  $scope.filterCategories = [ ];
  $scope.filterDate = new Date();
  $scope.filterColor = '#AAC4F3';
 
  $scope.categories = [
    {label:'Biography', type:'draggable'},
    {label:'Children\'s Books', type:'draggable'},
    {label:'Garden', type:'draggable'},
    {label:'Health', type:'draggable'},
    {label:'History', type:'draggable'}
  ];
  
  $scope.languageChecks = [
    { label:'English', value:'english', checked:true },
    { label:'German', value:'german', checked:false },
  ]

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
      return false;
    }

    if(item){
      item.label = text;
      item.type = 'created'
    }
    inputVisible = false;
    filterChange();
  }

  $scope.validateDrag = function(event, index, item, external, type) {
    if(categoryFilterExist(item)){
      return false;
    }else {
      return item;
    }
  }
  
  $scope.categoryInserted = function(event, index, item, external, type) {
    filterChange();
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
    filterChange();
  }
  
  /* filter information changed */
  
  function flatCategories(){
    var arr = $scope.filterCategories.map(function( category ){
      return category.label;   
    });
    return arr;
  }
  
  function flatLanguages() {
    var arr = $scope.languageChecks.filter(function(check){
      return check.checked;
    }).map(function(check){
      if(check.checked){
        return check.label;  
      }
    });
    
    return arr;
  }
  
  function filterChange(_skip) {
    var data = {
      categories: flatCategories(),
      languages: flatLanguages(),
      date: moment($scope.filterDate).format('DD.MM.YYYY'),
      coverColor: $scope.filterColor,
      skip: _skip || 0
    }
    //cache the data of the request, for the loadMore
    oldData = data;
    booksRestService.getBooks(data);
  }
  
  /* pickers events */
  $scope.dateChange = function(modelName, newDate) {
    //hide the calendar
    $scope.$broadcast('hidePicker');
     filterChange();
  }

  $scope.colorChange = function($event, color) {
     filterChange();
  }
  
  $scope.languagesChange = function($event) {
    if($event.target.type === 'checkbox') {
      filterChange();
    }
  }

  /* End picker events */
  $scope.init = function(){
    //execute the filter change when the filter is loaded
    $timeout(function(){
      filterChange();
    },0)
  }

  $scope.loadMore = function() {
    //replace the skip attribute with the number of items to skip
    oldData.skip = booksRestService.books.length;
    booksRestService.getBooks(oldData);
  }
}];

module.exports = controller;
