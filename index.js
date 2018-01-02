'use strict';

function addNewItem() {
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        console.log('addItem ran');
        let newItem = $(this).find('.js-shopping-list-entry').val();
        console.log(newItem);
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `);     
    });
}
function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        console.log('delete function started');
        $(this).closest('li').remove();
    });
}


function handleShoppingApp(){
    addNewItem();
    deleteItem();
}

$(handleShoppingApp);