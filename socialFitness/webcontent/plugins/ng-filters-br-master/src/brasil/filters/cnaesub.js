'use strict';

angular.module('brasil.filters').filter('cnaesub', function() {
  return function(input) {
  	var str = input+ '';
    str = str.replace(/(\d{4})(\d)/, '$1-$2');
    str = str.replace(/(\d{1})(\d)/, '$1$2');
    str = str.replace(/(\d{1})(\d{1,2})$/, '$1/$2'); 
    return str;
  };
});