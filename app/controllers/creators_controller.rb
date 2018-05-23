# Creator controller
class CreatorsController < ApplicationController
  def index
    @creators = Creator.all
  end

  def show
    @creator = Creator.find(params[:id])
  end

  def new
    @creator = Creator.new
  end

  def create
    @creator = Creator.new(creator_params)

    if @creator.save
      redirect_to @creator, notice: 'Creator was successfully created.'
    else
      render :new
    end
  end

  def edit
    @creator = Creator.find(params[:id])
  end

  def update
    @creator = Creator.find(params[:id])

    if @creator.update(creator_params)
      redirect_to @creator, notice: 'Creator was successfully updated.'
    else
      render :edit
    end
  end

  private

  def creator_params
    params.require(:creator).permit(:first_name, :last_name, :creator_id)
  end
end
