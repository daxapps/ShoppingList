
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
// find item in state, update checked property
// render state to reflect(like with add item)
  // if (state.items.checked === false) {
    state.items[0] = ( {
      name: item,
      checked: true
    });
  // } else {
  //   state.items[0] = ( {
  //     name: item,
  //     checked: false
  //   });
  // }
  
}

var removeItem = function(state, item) {

}

// Render functions
var renderList = function(state, element) { 
    var itemsHTML = state.items.map(function(item) {
        return '<li><span class="shopping-item">' + item.name + '</span>' + itemForm + '</li>';
      });
    element.html(itemsHTML);
};

// remove item
// $("span").closest(li).remove()

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
    console.log(state)
});

$('.shopping-list').on('click', ".shopping-item-toggle", function(event) {
  var targetItem = $(this).closest("li").find(".shopping-item")
    checkItem(state, targetItem.toggleClass('shopping-item__checked'))
	
  console.log(state)
})




