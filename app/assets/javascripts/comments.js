class Comment {
  constructor(attributes) {
    this.author = attributes.author;
    this.content = attributes.content;
    this.id = attributes.id;
    this.post = attributes.post
  }

  static addCommentForm(e) {
    e.preventDefault();
    let postId = $("#post_id").text();
    $("#new_comment_form").append(`
      <h1>Add a Comment</h1>
      <form class="new_comment" id="new_comment" action="/comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="mrAkbYksI39GmD7MKEuvvJtNZT3gq9KfN1F36h48IAIvw7/3Mm7RM7s/diLxgkUCCUssmyTogH8XX/ZpZ7tc5w==">
      <input type="hidden" value="${postId}" name="comment[post_id]" id="comment_post_id">
      <label for="comment_content">Content</label><br>
      <textarea name="comment[content]" id="comment_content"></textarea>
      <br><br>
      <input id="new_comment_submit" type="submit" name="commit" value="Create Comment" data-disable-with="Create Comment">
      </form>
    `);
    $("#new_comment").on("submit", Comment.addNewComment);
  }

  static addNewComment(e) {
    e.preventDefault();
    let $formValues = $(this).serialize();
    $.post("/comments", $formValues, Comment.successCreate, "json");
  }

  static successCreate(data) {
    let comment = new Comment(data);
    return comment.createComment();
  }

  createComment() {
    $("#post_comments").append(`
      <div class="comment">
      <h4>${this.author} wrote:</h4>
      <p>${this.content}</p>
      <form class="button_to" method="get" action="/posts/${this.post.id}/comments/${this.id}/edit"><input type="submit" value="Edit this comment"></form>
      <form class="button_to" method="post" action="/comments/${this.id}"><input type="hidden" name="_method" value="delete"><input data-confirm="Are you sure?" type="submit" value="Delete this comment"><input type="hidden" name="authenticity_token" value="oFtA5/vEpgl509urgzuQeAj2K+oDvvhtVU+PjS8VpzAVKNt9QIZURYR0k0Va8nrGmvBiTMf9qo11QQ4OVpLb1Q=="></form>
      </div>
    `);
  }

  static addJSListener() {
    $("#add_comment").on("click", Comment.addCommentForm);
  }

  static ready() {
    Comment.addJSListener();
  }
}

$(function() {
  Comment.ready();
});
