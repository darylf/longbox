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

  def edit_multiple
    @books = Book.find(params[:book_ids])
    @jobs = Job.select(:person_id, :role).distinct.includes(:person).where(book_id: params[:book_ids])
    @jobs << Job.new
  end

  def update_multiple
    books = Book.find(params[:book_ids])

    books.each_with_index do |book, i|
      book.jobs.destroy_all
      params[:jobs].each_with_index do |job, j|
        if !job[:person_id].blank? && !job[:_destroy].present?
          @jobs = Job.find_or_initialize_by(book_id: book.id, person_id: job[:person_id], role: job[:role])
          book.jobs << @jobs
        end
      end
      book.save!
    end
    redirect_to books.first.series
  end

  private

  def book_params
    params.require(:book).permit(:issue_number, :series_id, :cover_date, 
      jobs_attributes: [:id, :book_id, :person_id, :role, :_destroy])
  end
end