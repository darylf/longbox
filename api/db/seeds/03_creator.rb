create_count = get_number_to_create(CREATORS_TO_CREATE)

progressbar = ProgressBar.create(
  title: 'Creating Creators',
  total: create_count
)

create_count.times do
  Creator.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    created_by: ADMIN_USER,
    updated_by: ADMIN_USER
  )
  progressbar.increment
end
