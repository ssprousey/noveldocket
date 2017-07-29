angular.module('noveldocket').service('startReadingService', function($http) {
  this.saveBook = function(book) {
    $http({
      method: 'POST',
      url: '/books',
      data: book
    })
  }
})
