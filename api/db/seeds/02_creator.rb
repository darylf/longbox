progressbar = ProgressBar.create(
  title: 'Creating Creators',
  total: CREATORS_TO_CREATE
)

CREATORS_TO_CREATE.times do
  Creator.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
  progressbar.increment
end
