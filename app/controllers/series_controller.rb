# Series controller
class SeriesController < ApplicationController
  def index
    @series = Series.all
  end

  def show
    @series = Series.find(params[:id])
  end

  def new
    @series = Series.new
    @selected_value = params[:publisher] ? {} : { selected: params[:publisher] }
  end

  def create
    @series = Series.new(series_params)

    if @series.save
      redirect_to @series, notice: 'Series was successfully created.'
    else
      render :new
    end
  end

  def edit
    @series = Series.find(params[:id])
  end

  def update
    @series = Series.find(params[:id])

    if @series.update(series_params)
      redirect_to @series, notice: 'Series was successfully updated.'
    else
      render :edit
    end
  end

  private

  def series_params
    params.require(:series).permit(:name, :publisher_id)
  end
end
