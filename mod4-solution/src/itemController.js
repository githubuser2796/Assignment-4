(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);


itemsController.$inject = ['MenuDataService', 'item'];
function itemsController(MenuDataService, item) {
var items = this;
items.item = item;
}

})();
