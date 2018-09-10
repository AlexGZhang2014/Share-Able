class CommentsController < ApplicationController
  before_action :set_comment, only: [:edit, :update, :destroy]

  def new
    @comment = Comment.new(post_id: params[:post_id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.author = @comment.user.username
    if @comment.save
      respond_to do |format|
        format.html { redirect_to post_path(@comment.post), notice: "Comment was successfully created." }
        format.json { render json: @comment, status: 201 }
      end
    else
      render :new
    end
  end

  private

    def comment_params
      params.require(:comment).permit(:author, :content, :post_id)
    end

    def set_comment
      @comment = Comment.find(params[:id])
    end
end
