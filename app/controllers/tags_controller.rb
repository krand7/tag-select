class TagsController < ApplicationController
  respond_to :json

  def index
    respond_with Tag.all
  end

  def show
    respond_with tag
  end

  def create
    respond_with Tag.create(tag_params)
  end

  def update
    respond_with tag.update(tag_params)
  end

  def destroy
    respond_with tag.destroy
  end

  private

    def tag
      Tag.find(params[:id])
    end

    def tag_params
      params.require(:tag).permit(:title, :selected)
    end

end
