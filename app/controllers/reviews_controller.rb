class ReviewsController < ApplicationController
  before_action :set_review, only: [:edit, :update, :destroy]

  def new
    @review = Review.new(collection_id: params[:collection_id])
  end

  private

    def review_params
      params.require(:review).permit(:author, :content, :collection_id)
    end

    def set_review
      @review = Review.find(params[:id])
    end
end
