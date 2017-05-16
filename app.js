
var itemForm = '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div>'


// Single state object
var state = {
  items: []
};

// state management
function addItem(state, item) {
  state.items.push({
    displayName: item,
    checkedOff: false
  });
}

var checkItem = function(state, item) {
// find item in state, update checked property
    state.items[0] = ( {
      name: item,
      checked: true
    });
}

var removeItem = function(state, item) {
  state.items = ({})
}

// Render functions
var renderList = function(state, element) { 
    var itemsHTML = state.items.map(function(item) {
        return '<li><span class="shopping-item">' + item.name + '</span>' + itemForm + '</li>';
      });
    element.html(itemsHTML);
};

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

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  removeItem(state, $(this).closest('li').remove())
  console.log(state)
})
