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
    @book.series_id = params[:series_id] unless params[:series_id].nil?
    @book.issue_number = params[:next_issue] unless params[:next_issue].nil?
    @jobs = @book.jobs.build
  end

  def edit
    @book = Book.joins(series: :publisher).find(params[:id])
    @jobs = @book.jobs.build
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      if(params[:redirect_to_series])
        redirect_to @book.series, notice: 'Book was successfully created.'
      else
        redirect_to @book, notice: 'Book was successfully created.'
      end
    else
      render :new
    end
  end

  def update
    @book = Book.joins(series: :publisher).find(params[:id])
    if @book.update_attributes(book_params)
      redirect_to @book
    else
      render 'edit'
    end
  end

  def destroy
    @book = Book.joins(series: :publisher).find(params[:id])
    @book.destroy
    redirect_to books_path
  end

  private
  def book_params
    params.require(:book).permit(:issue_number, :series_id, :cover_date, 
      jobs_attributes: [:id, :book_id, :person_id, :role, :_destroy])
  end
end