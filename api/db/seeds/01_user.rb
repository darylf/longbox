progressbar = ProgressBar.create(
  title: 'Creating Users',
  total: USERS_TO_CREATE
)

def generate_password
  o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
  (0...50).map { o[rand(o.length)] }.join
end

USERS_TO_CREATE.times do
  User.create(
    email: Faker::Internet.unique.email,
    name: Faker::Name.first_name,
    password: generate_password
  )
  progressbar.increment
end
