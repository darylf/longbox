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

['Creator', 'Writer', 'Penciller', 'Colorist', 'Inker', 'Cover Artist', 'Letterer', 'Editor', 'Assistant Editor'].each do |c|
  CreditRole.find_or_create_by(name: c)
end

['Comic', 'Trade Paperback', 'Hard Cover'].each do |t|
  BookType.find_or_create_by(name: t)
end

@comic = BookType.find_by(name: 'Comic')

['Marvel Comics', 'DC Comics', 'Image Comics'].each do |t|
  Publisher.find_or_create_by(name: t)
end

10.times do
  Creator.find_or_create_by(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
end

5.times do
  series = Series.find_or_create_by(name: generate_series_name, publisher: Publisher.order(Arel.sql('RANDOM()')).first)
  (1..10).each do |n|
    book = Book.create(series: series, issue: n, book_type: @comic)
    Credit.create(book_id: book.id, creator: Creator.order(Arel.sql('RANDOM()')).first, credit_role: CreditRole.order(Arel.sql('RANDOM()')).first)
    Credit.create(book_id: book.id, creator: Creator.order(Arel.sql('RANDOM()')).first, credit_role: CreditRole.order(Arel.sql('RANDOM()')).first)
  end
end
