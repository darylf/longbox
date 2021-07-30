create_count = get_number_to_create(USERS_TO_CREATE)

progressbar = ProgressBar.create(
  title: 'Creating Users',
  total: create_count
)

def generate_password
  o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
  (0...50).map { o[rand(o.length)] }.join
end

create_count.times do
  User.create(
    email: Faker::Internet.unique.email,
    name: Faker::Name.first_name,
    password: generate_password
  )
  progressbar.increment
end
