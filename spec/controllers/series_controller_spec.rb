require 'rails_helper'

describe SeriesController do

  let!(:publisher) { FactoryGirl.create :publisher }
  let!(:series) { FactoryGirl.create :series }
  let(:valid_attributes) { FactoryGirl.attributes_for(:series, publisher_id: publisher.id) }
  let(:invalid_attributes) { FactoryGirl.attributes_for(:series, name: '') }

  describe "GET index" do
    it "assigns all series as @series" do
      get :index
      expect(assigns(:series)).to eq([series])
    end
  end

  describe "GET show" do
    it "assigns the requested series as @series" do
      get :show, id: series.to_param
      expect(assigns(:series)).to eq(series)
    end
  end

  describe "GET new" do
    it "assigns a new series @series" do
      get :new
      expect(assigns(:series)).to be_a_new(Series)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "creates a new Series" do
        expect {
          post :create, {series: valid_attributes}
        }.to change(Series, :count).by(1)
      end

      it "assigns a newly created book as @series" do
        post :create, {:series => valid_attributes}
        expect(assigns(:series)).to be_a(Series)
        expect(assigns(:series)).to be_persisted
      end

      it "redirects to the created series" do
        post :create, {series: valid_attributes}
        expect(response).to redirect_to(Series.last)
      end
    end

    describe "with invalid params" do
      it "re-renders the 'new' template" do
        post :create, {series: invalid_attributes }
        expect(response).to render_template("new")
      end
    end

  end

  describe "GET edit" do
    it "assigns the requested series as @series" do
      get :edit, id: series.to_param
      expect(assigns(:series)).to eq(series)
    end
  end

  describe 'POST update' do
    describe 'with valid params' do
      it 'redirects to the existing series' do
        post :update, { id: series.to_param, series: { name: 'New Name' } }
        expect(response).to redirect_to(series)
      end

      it 'updates existing series' do
        post :update, { id: series.to_param, series: { name: 'New Name' } }
        series.reload
        expect(series.name).to eq('New Name')
      end
    end

    describe 'with invalid params' do
      it 're-renders the `edit` template' do
        post :update, { id: series.to_param, series: { name: '' } }
        expect(response).to render_template('edit')
      end
    end
  end

  describe "DELETE destroy" do
    before(:each) do
      @series1 = FactoryGirl.create(:series)
    end

    it "destroys a series" do
      expect {
          delete :destroy, :id => @series1.id
        }.to change(Series, :count).by(-1)
    end

    it "destroys the requested series" do
      delete :destroy, :id => @series1.id
      expect { Series.find(@series1.id) }.to raise_exception(ActiveRecord::RecordNotFound)
    end

    it "redirects to the series list" do
      delete :destroy, :id => @series1.id
      expect(response).to redirect_to(series_path)
    end
  end
end