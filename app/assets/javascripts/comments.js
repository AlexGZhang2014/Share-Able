class Comment {
  constructor(attributes) {
    this.author = attributes.author;
    this.content = attributes.content;
    this.id = attributes.id;
  }

  static addCommentForm(e) {
    e.preventDefault();
    $("#new_comment_form").append(`
      <h1>Add a Comment</h1>
      <form class="new_comment" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="mrAkbYksI39GmD7MKEuvvJtNZT3gq9KfN1F36h48IAIvw7/3Mm7RM7s/diLxgkUCCUssmyTogH8XX/ZpZ7tc5w==">
      <input type="hidden" value="2" name="comment[post_id]" id="comment_post_id">
      <label for="comment_content">Content</label><br>
      <textarea name="comment[content]" id="comment_content"></textarea>
      <br><br>
      <input type="submit" name="commit" value="Create Comment" data-disable-with="Create Comment">
      </form>
      `);
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
