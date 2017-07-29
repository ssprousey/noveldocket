angular.module('noveldocket').controller('startReadingCtrl', function($scope, startReadingService) {
  $scope.saveBook = function(book) {
    startReadingService.saveBook(book)
  }
})
