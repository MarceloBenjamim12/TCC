'use strict';

angular.module('brasil.filters').filter('cnaecla', function() {
  return function(input) {
  	var str = input+ '';
    str = str.replace(/(\d{2})(\d)/, '$1.$2');
    str = str.replace(/(\d{1})(\d)/, '$1$2');
    str = str.replace(/(\d{1})(\d{1,1})$/, '$1-$2'); 
    return str;
  };
});