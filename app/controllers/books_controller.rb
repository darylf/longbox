class BooksController < ApplicationController
  # respond_to :html
  
  def index
    @books = Book.includes(:series)
  end

  def show
    @book = Book.find(params[:id])
  end
end