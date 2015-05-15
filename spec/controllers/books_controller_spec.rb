require 'rails_helper'

describe BooksController do

  let!(:book) { FactoryGirl.create :book }

  let(:valid_attributes) {
    book.attributes.symbolize_keys.select {|_, value| !value.nil? }
  }

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
          post :create, {:book => valid_attributes}
        }.to change(Book, :count).by(1)
      end

      it "assigns a newly created book as @book" do
        post :create, {:book => valid_attributes}
        expect(assigns(:book)).to be_a(Book)
        expect(assigns(:book)).to be_persisted
      end

      it "redirects to the created book" do
        post :create, {:book => valid_attributes}
        expect(response).to redirect_to(Book.last)
      end
    end

    describe "with invalid params" do
      it "re-renders the 'new' template" do
        post :create, :book => {}
        expect(response).to render_template("new")
      end
    end

  end
end