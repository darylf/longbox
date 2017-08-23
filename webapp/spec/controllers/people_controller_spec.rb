require 'rails_helper'

describe PeopleController do

  let!(:person) { FactoryGirl.create :person }
  let(:valid_attributes) { FactoryGirl.attributes_for(:person) }
  let(:invalid_attributes) { FactoryGirl.attributes_for(:person, name: '') }

  describe "GET index" do
    it "assigns all people as @people" do
      get :index
      expect(assigns(:people)).to eq([person])
    end
  end

  describe "GET show" do
    it "assigns the requested person as @person" do
      get :show, id: person.to_param
      expect(assigns(:person)).to eq(person)
    end
  end

  describe "GET new" do
    it "assigns a new person @person" do
      get :new
      expect(assigns(:person)).to be_a_new(Person)
    end
  end

  describe "GET edit" do
    it "assigns the requested person as @person" do
      get :edit, id: person.to_param
      expect(assigns(:person)).to eq(person)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "creates a new Person" do
        expect {
          post :create, {person: valid_attributes}
        }.to change(Person, :count).by(1)
      end

      it "assigns a newly created book as @person" do
        post :create, {:person => valid_attributes}
        expect(assigns(:person)).to be_a(Person)
        expect(assigns(:person)).to be_persisted
      end

      it "redirects to the created person" do
        post :create, {person: valid_attributes}
        expect(response).to redirect_to(Person.last)
      end
    end

    describe "with invalid params" do
      it "re-renders the 'new' template" do
        post :create, {person: invalid_attributes }
        expect(response).to render_template("new")
      end
    end
  end

  describe 'POST update' do
    describe 'with valid params' do
      it 'redirects to the existing person' do
        post :update, { id: person.to_param, person: { name: 'New Name' } }
        expect(response).to redirect_to(person)
      end

      it 'updates existing person' do
        post :update, { id: person.to_param, person: { name: 'New Name' } }
        person.reload
        expect(person.name).to eq('New Name')
      end
    end

    describe 'with invalid params' do
      it 're-renders the `edit` template' do
        post :update, { id: person.to_param, person: { name: '' } }
        expect(response).to render_template('edit')
      end
    end
  end

end