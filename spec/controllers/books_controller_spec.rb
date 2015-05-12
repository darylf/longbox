require 'rails_helper'

describe BooksController do

  let!(:book) { FactoryGirl.create :book }

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

end