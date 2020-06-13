(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);


itemsController.$inject = ['catItems'];
function itemsController(catItems) {
var itctrl = this;
itctrl.catItems = catItems.data.menu_items;
}

})();
