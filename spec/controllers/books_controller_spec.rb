require 'rails_helper'

describe BooksController do

  let!(:book) { FactoryGirl.create :book }
  let!(:series) { FactoryGirl.create :series }
  let(:valid_attributes) { FactoryGirl.attributes_for(:book, series_id: series.id) }
  let(:invalid_attributes) { FactoryGirl.attributes_for(:book, issue_number: '') }

  describe "GET index" do
    it "assigns all books as @books" do
      get :index
      expect(assigns(:books)).to eq([book])
    end
  end

  describe "GET show" do
    it "assigns the requested book as @book" do
      get :show, id: book.to_param
      expect(assigns(:book)).to eq(book)
    end
  end

  describe "GET new" do
    it "assigns a new book @books" do
      get :new
      expect(assigns(:book)).to be_a_new(Book)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "creates a new Book" do
        expect {
          post :create, {book: valid_attributes}
        }.to change(Book, :count).by(1)
      end

      it "assigns a newly created book as @book" do
        post :create, {:book => valid_attributes}
        expect(assigns(:book)).to be_a(Book)
        expect(assigns(:book)).to be_persisted
      end

      it "redirects to the created book" do
        post :create, {book: valid_attributes}
        expect(response).to redirect_to(Book.last)
      end
    end

    describe "with invalid params" do
      it "re-renders the 'new' template" do
        post :create, {book: invalid_attributes }
        expect(response).to render_template("new")
      end
    end

  end

  describe "GET edit" do
    it "assigns the requested book as @book" do
      get :edit, id: book.to_param
      expect(assigns(:book)).to eq(book)
    end
  end

  describe 'POST update' do

    describe 'with valid params' do
      it 'redirects to the existing Book' do
        post :update, { id: book.to_param, book: { issue_number: '100' } }
        expect(response).to redirect_to(book)
      end

      it 'updates existing book' do
        post :update, { id: book.to_param, book: { issue_number: '100' } }
        book.reload
        expect(book.issue_number).to eq('100')
      end
    end

    describe 'with invalid params' do
      it 're-renders the `edit` template' do
        post :update, { id: book.to_param, book: { issue_number: '' } }
        expect(response).to render_template('edit')
      end
    end

  end


end