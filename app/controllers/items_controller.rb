class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  def new
    @item = Item.new(collection_id: params[:collection_id])
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      respond_to do |format|
        format.html { redirect_to edit_collection_path(@item.collection), notice: "Item was successfully created." }
        format.json { render json: @item, status: 201 }
      end
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @item.update(item_params)
      redirect_to item_path(@item), notice: "Item was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @item.destroy
    redirect_to items_path, notice: "Item was successfully deleted."
  end

  private

    def item_params
      params.require(:item).permit(:name, :description, :collection_id)
    end

    def set_item
      @item = Item.find(params[:id])
    end
end
