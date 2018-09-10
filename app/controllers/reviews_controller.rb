class ReviewsController < ApplicationController
  before_action :set_review, only: [:edit, :update, :destroy]

  def new
    @review = Review.new(collection_id: params[:collection_id])
  end

  def create
    @review = Review.new(review_params)
    @review.user = @current_user
    @review.author = @review.user.username
    if @review.save
      respond_to do |format|
        format.html { redirect_to collection_path(@review.collection), notice: "Review was successfully created." }
        format.json { render json: @review, status: 201 }
      end
    else
      render :new
    end
  end

  private

    def review_params
      params.require(:review).permit(:author, :content, :rating, :collection_id)
    end

    def set_review
      @review = Review.find(params[:id])
    end
end
