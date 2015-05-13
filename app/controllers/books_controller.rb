class BooksController < ApplicationController
  # respond_to :html
  
  def index
    @books = Book.joins(series: :publisher)
  end

  def show
    @book = Book.joins(series: :publisher).find(params[:id])
  end

end