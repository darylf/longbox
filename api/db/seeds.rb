return unless Rails.env.development?

CLEAN_ALL_RECORDS = true
USERS_TO_CREATE = 5
CREATORS_TO_CREATE = 150..200
SERIES_TO_CREATE = 70..99
BOOKS_ON_EACH_SERIES = 7..12

def get_number_to_create(val)
  val.is_a?(Range) ? rand(val) : val
end

['Writer', 'Artist', 'Creator', 'Penciller', 'Colorist', 'Inker', 'Cover Artist', 'Letterer', 'Editor', 'Assistant Editor'].each do |c|
  CreditRole.find_or_create_by(name: c)
end

['Comic', 'Trade Paperback', 'Hard Cover'].each do |t|
  BookFormat.find_or_create_by(name: t)
end

if CLEAN_ALL_RECORDS
  puts 'Cleaning data...'
  Credit.delete_all
  Book.delete_all
  Series.delete_all
  Publisher.delete_all
  Creator.delete_all
  User.delete_all
end

ADMIN_USER = User.find_or_create_by(email: 'daryl@example.com', username: 'Daryl') do |user|
  user.password = 'password'
end


Dir[Rails.root.join('db', 'seeds', '*.rb')].sort.each do |file|
  require file
end
