(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);


categoriesController.$inject = ['MenuDataService', 'category'];
function categoriesController(MenuDataService, category) {
var categories = this;
categories.category = category;
}

})();
