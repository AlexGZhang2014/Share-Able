class CollectionsController < ApplicationController
  before_action :set_collection, only: [:show, :edit, :update, :destroy]

  def index
    if params[:user_id]
      @collections = current_user.collections
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @collections }
      end
    else
      @collections = Collection.all
      respond_to do |format|
        format.html { render :index }
        format.json { render json: @collections }
      end
    end
  end

  def new
    @collection = Collection.new(user_id: params[:user_id])
  end

  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      respond_to do |format|
        format.html { redirect_to collection_path(@collection), notice: "Collection was successfully created." }
        format.json { render json: @collection, status: 201 }
      end
    else
      render :new
    end
  end

  def show
    @items = @collection.items
    @reviews = @collection.reviews
  end

  def edit
    @items = @collection.items
  end

  def update
    if @collection.update(collection_params)
      redirect_to collection_path(@collection), notice: "Collection was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @collection.destroy
    redirect_to collections_path, notice: "Collection was successfully deleted."
  end

  private

    def collection_params
      params.require(:collection).permit(:name, :description, :user_id)
    end

    def set_collection
      @collection = Collection.find(params[:id])
    end
end
