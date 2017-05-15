
var itemForm = '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div>'


// Single state object
var state = {
    items: []
};

// State modification functions
var addItem = function(state, item) {
    state.items.push( {
    	name: item,
    	checked: false
    });
    
};

var checkItem = function(state, item) {

}

// Render functions
var renderList = function(state, element) {
  
    var itemsHTML = state.items.map(function(item) {

        return '<li><span class="shopping-item">' + item.name + '</span>' + itemForm + '</li>';
      });
    element.html(itemsHTML);
};

// check item
// .toggleClass()

// remove item
// $("span").closest(li).remove()

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});

$('.shopping-item-toggle').on('click', function(event) {
	// checkItem(state, $())
})




