class BooksController < ApplicationController
  # respond_to :html
  
  def index
    @books = Book.joins(series: :publisher)
  end

  def show
    @book = Book.joins(series: :publisher).find(params[:id])
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      redirect_to @book, notice: 'Artist was successfully created.'
    else
      render :new
    end
  end

  private
  def book_params
    params.require(:book).permit(:issue_number, :series_id)
  end
end