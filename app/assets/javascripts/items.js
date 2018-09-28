class Item {
  constructor(attributes) {
    this.id = attributes.id;
    this.name = attributes.name;
    this.description = attributes.description;
    this.collection = attributes.collection;
  }

  static addItemForm(e) {
    e.preventDefault();
    let collectionId = $("#collection_id").text();
    $("#new_item_form").append(`
      <h1>Add a new item</h1>
      <form class="new_item" id="new_item" action="/items" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="xS/NmKWp3A24XsUXr6TlFOly5hk3i3zsi5/mJZKxR+5EM3bmI9nWDWMV1S943Tbq7ZaKE6VWDAE0tCI2cjACsg==">
      <input type="hidden" value="${collectionId}" name="item[collection_id]" id="item_collection_id">
      <label for="item_name">Name</label><br>
      <input type="text" name="item[name]" id="item_name">
      <br><br>
      <label for="item_description">Description</label><br>
      <textarea name="item[description]" id="item_description"></textarea>
      <br><br>
      <input type="submit" name="commit" value="Create Item" data-disable-with="Create Item">
      </form>
    `);
    $(".new_item").on("submit", Item.addNewItem);
  }

  static addNewItem(e) {
    e.preventDefault();
    let $formValues = $(this).serialize();
    $.post("/items", $formValues, Item.successCreate, "json");
  }

  static successCreate(data) {
    let item = new Item(data);
    return item.createItem();
  }

  createItem() {
    $("#collection_edit_items").append(`
      <div class="item">
      <h4>${this.name}</h4>
      <p>${this.description}</p>
      <form class="button_to" method="get" action="/collections/${this.collection.id}/items/${this.id}/edit"><input type="submit" value="Edit this item"></form>
      </div>
    `);
  }

  static addJSListener() {
    $("#add_item").on("click", Item.addItemForm);
  }

  static ready() {
    Item.addJSListener();
  }
}

$(function() {
  Item.ready();
});
