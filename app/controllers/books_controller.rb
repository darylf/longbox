# Book controller
class BooksController < ApplicationController
  before_action :find_book, only: %i[edit update show]

  def show; end

  def new
    @series = Series.find(params[:series_id])
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)
    @book.series_id = params[:series_id]
    @book.cover_image.purge if params[:remove_attachment]

    if @book.save
      redirect_to [@book.series, @book], notice: 'Book was successfully created.'
    else
      render new_series_book_path(@book.series, @book)
    end
  end

  def edit
    @series = Series.find(params[:series_id])
  end

  def update
    @series = Series.find(params[:series_id])
    @book.image.attach(params[:image])

    if @book.update(book_params)
      redirect_to [@book.series, @book], notice: 'Book was successfully updated.'
    else
      render :edit
    end
  end

  private

  def book_params
    params.require(:book).permit(
      :name,
      :issue,
      :book_type,
      :image,
      :series_id,
      relations_attributes: %i[id creator_id role _destroy]
    )
  end

  def find_book
    @book = Book.find(params[:id])
  end
end
