class Review {
  constructor(attributes) {
    this.id = attributes.id;
    this.author = attributes.author;
    this.content = attributes.content;
    this.rating = attributes.rating;
    this.colleciton = attributes.collection;
  }

  static addReviewForm(e) {
    e.preventDefault();
    let collectionId = $("#collection_id").text();
    $("#new_review_form").append(`
      <h1>Write a new review!</h1>
      <form class="new_review" id="new_review" action="/reviews" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="B+1RWgrTp7f78HW79LaCPNVSlw2EPDN2dCe9MlICFcGkFydcIxWxhT53TJhEX5s1ep63fF2EAlyhm+YUVvv4Mw==">
      <input type="hidden" value="${collectionId}" name="review[collection_id]" id="review_collection_id">
      <label for="review_content">Content</label><br>
      <textarea name="review[content]" id="review_content"></textarea>
      <br><br>
      <label for="review_rating">Rating</label>
      <input type="number" name="review[rating]" id="review_rating">
      <br><br>
      <input type="submit" name="commit" value="Create Review" data-disable-with="Create Review">
      </form>
    `);
  }

  static addJSListener() {
    $("#add_review").on("click", Review.addReviewForm);
  }

  static ready() {
    Review.addJSListener();
  }
}

$(function() {
  Review.ready();
});
