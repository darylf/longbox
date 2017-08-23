require 'rails_helper'

describe JobsController do

  let!(:job) { FactoryGirl.create :job }
  let!(:book) { FactoryGirl.create :book }
  let!(:person) { FactoryGirl.create :person }
  let(:valid_attributes) { FactoryGirl.attributes_for(:job, book_id: book.id, person_id: person.id) }
  let(:invalid_attributes) { FactoryGirl.attributes_for(:job, role: '') }

  describe "GET index" do
    it "assigns all jobs as @jobs" do
      get :index
      expect(assigns(:jobs)).to eq([job])
    end
  end

  describe "GET show" do
    it "assigns the requested job as @job" do
      get :show, id: job.to_param
      expect(assigns(:job)).to eq(job)
    end
  end

  describe "GET new" do
    it "assigns a new job @jobs" do
      get :new
      expect(assigns(:job)).to be_a_new(Job)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "creates a new job" do
        expect {
          post :create, {job: valid_attributes}
        }.to change(Job, :count).by(1)
      end

      it "assigns a newly created job as @job" do
        post :create, {:job => valid_attributes}
        expect(assigns(:job)).to be_a(Job)
        expect(assigns(:job)).to be_persisted
      end

      it "redirects to the created job if no redirect_to is passed" do
        post :create, {job: valid_attributes}
        expect(response).to redirect_to(Job.last)
      end

    end

    describe "with invalid params" do
      it "re-renders the 'new' template" do
        post :create, {job: invalid_attributes }
        expect(response).to render_template("new")
      end
    end

  end

  describe "GET edit" do
    it "assigns the requested job as @job" do
      get :edit, id: job.to_param
      expect(assigns(:job)).to eq(job)
    end
  end

  describe 'POST update' do
    describe 'with valid params' do
      it 'redirects to the existing job' do
        post :update, { id: job.to_param, job: { role: 'artist' } }
        expect(response).to redirect_to(job)
      end

      it 'updates existing job' do
        post :update, { id: job.to_param, job: { role: 'artist' } }
        job.reload
        expect(job.role).to eq('artist')
      end
    end

    describe 'with invalid params' do
      it 're-renders the `edit` template' do
        post :update, { id: job.to_param, job: { role: '' } }
        expect(response).to render_template('edit')
      end
    end
  end

  describe "DELETE destroy" do
    before(:each) do
      @job1 = FactoryGirl.create(:job)
    end

    it "destroys a job" do
      expect {
          delete :destroy, :id => @job1.id
        }.to change(Job, :count).by(-1)
    end

    it "destroys the requested job" do
      delete :destroy, :id => @job1.id
      expect { Job.find(@job1.id) }.to raise_exception(ActiveRecord::RecordNotFound)
    end

    it "redirects to the jobs list" do
      delete :destroy, :id => @job1.id
      expect(response).to redirect_to(jobs_path)
    end
  end
end