class Review {
  constructor(attributes) {
    this.id = attributes.id;
    this.author = attributes.author;
    this.content = attributes.content;
    this.rating = attributes.rating;
    this.collection = attributes.collection;
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
    $(".new_review").on("submit", Review.addNewReview);
  }

  static addNewReview(e) {
    e.preventDefault();
    let $formValues = $(this).serialize();
    $.post("/reviews", $formValues, Review.successCreate, "json");
  }

  static successCreate(data) {
    let review = new Review(data);
    return review.createReview();
  }

  createReview() {
    $("#collection_reviews").append(`
      <div class="review">
        <h4>${this.author} wrote:</h4>
        <p><strong>${this.rating} stars</strong></p>
        <p>${this.content}</p>
        <form class="button_to" method="get" action="/collections/${this.collection.id}/reviews/${this.id}/edit"><input type="submit" value="Edit this review"></form>
      </div>
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
