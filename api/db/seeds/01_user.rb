create_count = get_number_to_create(USERS_TO_CREATE)

progressbar = create_progress_bar(
  title: 'Creating Users',
  total: create_count
)

create_count.times do
  User.create(Faker::Internet.user('username', 'email', 'password'))
  progressbar.increment
end
