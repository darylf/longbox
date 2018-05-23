def create_publishers
  total_publishers = rand(1..4)
  puts "Creating #{total_publishers} publishers"

  (0..total_publishers).map do
    publisher = Publisher.create(name: generate_publisher_name)
    create_series_for publisher
  end
end

def create_series_for(publisher)
  total_series = rand(1..10)
  puts "Creating #{total_series} series for #{publisher.name}"

  (0..total_series).map do
    series = Series.create(name: generate_series_name, publisher_id: publisher.id)
    create_books_for series
  end
end

def create_books_for(series)
  total_books = rand(1..12)
  writer = generate_creator
  artist = generate_creator
  puts "Creating #{total_books} books for #{series.name}"

  (0..total_books).each do |x|
    book = Book.create(issue: x, book_type: 'issue', series_id: series.id)
    Relation.create(book_id: book.id, creator_id: writer.id, role: 'writer')
    Relation.create(book_id: book.id, creator_id: artist.id, role: 'artist')
  end
end

def generate_creator
  case rand(1..100)
  when 1..50 then Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
  when 50..100 then Creator.order('RANDOM()').first
  end
end

def generate_series_name
  case rand(1..100)
  when 1..40 then "#{Faker::Superhero.prefix} #{Faker::Superhero.power}".titlecase
  when 40..80 then "#{Faker::Name.name} #{Faker::Superhero.suffix}".titlecase
  when 80..100 then Faker::Superhero.name.titlecase
  end
end

def generate_publisher_name
  case rand(1..100)
  when 1..30 then "#{Faker::Commerce.department} Publishing".titlecase
  when 30..60 then "#{Faker::Color.color_name} #{Faker::Hacker.noun} Comics".titlecase
  when 60..100 then "#{Faker::Bank.name.titlecase} Books".titlecase
  end
end

Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)

create_publishers
