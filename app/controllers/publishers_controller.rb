# Publisher controller
class PublishersController < ApplicationController
  def index
    @publishers = Publisher.order(:name)
  end

  def show
    @publisher = Publisher.find(params[:id])
  end

  def new
    @publisher = Publisher.new
  end

  def create
    @publisher = Publisher.new(publisher_params)

    if @publisher.save
      redirect_to @publisher, notice: 'Publisher was successfully created.'
    else
      render :new
    end
  end

  def edit
    @publisher = Publisher.find(params[:id])
  end

  def update
    @publisher = Publisher.find(params[:id])

    if @publisher.update(publisher_params)
      redirect_to @publisher, notice: 'Publisher was successfully updated.'
    else
      render :edit
    end
  end

  private

  def publisher_params
    params.require(:publisher).permit(:name, :publisher_id)
  end
end
