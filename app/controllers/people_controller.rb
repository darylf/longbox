class PeopleController < ApplicationController

  def index
    @people = Person.all
  end

  def show
    @person = Person.find(params[:id])
  end

  def new
    @person = Person.new
  end

  def edit
    @person = Person.find(params[:id])
  end

  def create
    @person = Person.new(person_params)

    if @person.save
      redirect_to @person, notice: 'person was successfully created.'
    else
      render :new
    end
  end

  def update
   @person = Person.find(params[:id])
    if @person.update_attributes(person_params)
      redirect_to @person
    else
      render 'edit'
    end
  end

  private
  def person_params
    params.require(:person).permit(:name)
  end
end
