# This file should contain all the record creation needed to
# seed the database with its default values. The data can then
# be loaded with the rails db:seed command (or created alongside
# the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
def create_publishers
  total_publishers = 1 + rand(4)
  puts "Creating #{total_publishers} publishers"

  (0..total_publishers).map {
    publisher = Publisher.create(name: generate_publisher_name)
    create_series_for publisher
  }
end

def create_series_for(publisher)
  total_series = 1 + rand(50)
  puts "Creating #{total_series} series for #{publisher.name}"
  (0..total_series).map {
    series = Series.create(name: generate_series_name, publisher_id: publisher.id)
    create_books_for series
  }

rescue Faker::UniqueGenerator::RetryLimitExceeded
  puts "Oops! #{total_series} was too many!\n"
end

def create_books_for(series)
  total_books = 1 + rand(50)
  x=0
  writer = get_creator
  artist = get_creator
  puts "Creating #{total_books} books for #{series.name}"
  (0..total_books).map {
    x += 1
    book = Book.create(issue: x, book_type: 'issue', series_id: series.id)
    Relation.create(book_id: book.id, creator_id: writer.id, role: 'writer')
    Relation.create(book_id: book.id, creator_id: artist.id, role: 'artist')
  }
end

def get_creator
  if (1 + rand(2) > 1)
    creator = Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
  else
    creator = Creator.order("RANDOM()").first
  end
  creator
end

def generate_series_name
  if (1 + rand(2) > 1)
    "#{Faker::Superhero.prefix} #{Faker::Superhero.power}".titlecase
  elsif (1 + rand(2) > 1)
    "#{Faker::Name.name} #{Faker::Superhero.suffix}".titlecase
  else
    Faker::Superhero.name.titlecase
  end
end

def generate_publisher_name
  if (1 + rand(2) > 1)
    "#{Faker::Commerce.department} Publishing".titlecase
  elsif (1 + rand(2) > 1)
    "#{Faker::Color.color_name} #{Faker::Hacker.noun} Comics".titlecase
  else
    "#{Faker::Bank.name.titlecase} Books".titlecase
  end
end

Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)


create_publishers


