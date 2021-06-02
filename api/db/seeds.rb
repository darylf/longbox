USERS_TO_CREATE = 5
CREATORS_TO_CREATE = 20
SERIES_TO_CREATE = 10
BOOKS_ON_EACH_SERIES = 12

['Creator', 'Writer', 'Penciller', 'Colorist', 'Inker', 'Cover Artist', 'Letterer', 'Editor', 'Assistant Editor'].each do |c|
  CreditRole.find_or_create_by(name: c)
end

['Comic', 'Trade Paperback', 'Hard Cover'].each do |t|
  BookFormat.find_or_create_by(name: t)
end

Dir[Rails.root.join('db', 'seeds', '*.rb')].sort.each do |file|
  require file
end
