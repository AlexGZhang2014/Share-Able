class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    if params[:user_id]
      @posts = current_user.posts
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @posts }
      end
    else
      @posts = Post.all
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @posts }
      end
    end
  end

  def new
    @post = Post.new(user_id: params[:user_id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      respond_to do |format|
        format.html { redirect_to post_path(@post), notice: "Post was successfully created." }
        format.json { render json: @post, status: 201 }
      end
    else
      render :new
    end
  end

  def show
    @comments = @post.comments
    @comment = Comment.new(post_id: @post.id)
  end

  def edit
  end

  def update
    if @post.update(post_params)
      redirect_to post_path(@post), notice: "Post was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_path, notice: "Post was successfully deleted."
  end

  private

    def post_params
      params.require(:post).permit(:title, :content, :user_id)
    end

    def set_post
      @post = Post.find(params[:id])
    end
end
