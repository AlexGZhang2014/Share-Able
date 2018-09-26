class Comment {
  constructor(attributes) {
    this.author = attributes.author;
    this.content = attributes.content;
    this.id = attributes.id;
  }

  static addCommentForm(e) {
    e.preventDefault();
    alert("got it");
  }

  static addJSListener() {
    $("#add_comment").on("click", Comment.addCommentForm)
  }

  static ready() {
    Comment.addJSListener();
  }
}

$(function() {
  Comment.ready();
});
