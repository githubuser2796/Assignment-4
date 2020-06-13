(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['allCat'];
function categoriesController(allCat) {
var categories = this;
categories.allCat = allCat.data;
}

})();
