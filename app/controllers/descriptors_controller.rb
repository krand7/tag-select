class DescriptorsController < ApplicationController
  respond_to :json

  # GET /descriptors
  # GET /descriptors.json
  def index
    respond_with Descriptor.all
  end

  # GET /descriptors/1
  # GET /descriptors/1.json
  def show
    respond_with descriptor
  end

  # POST /descriptors
  # POST /descriptors.json
  def create
    respond_with Descriptor.create(descriptor_params)
  end

  # PATCH/PUT /descriptors/1
  # PATCH/PUT /descriptors/1.json
  def update
    respond_with descriptor.update(descriptor_params)
  end

  # DELETE /descriptors/1
  # DELETE /descriptors/1.json
  def destroy
    respond_with descriptor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def descriptor
      Descriptor.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def descriptor_params
      params.require(:descriptor).permit(:text, :valence)
    end
end
