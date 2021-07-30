create_count = get_number_to_create(SERIES_TO_CREATE)

progressbar = ProgressBar.create(
  title: 'Creating Series',
  total: create_count
)

def generate_series_name
  case rand(1..100)
  when 1..40 then "#{Faker::Superhero.prefix} #{Faker::Superhero.power}".titlecase
  when 40..80 then "#{Faker::Name.name} #{Faker::Superhero.suffix}".titlecase
  when 80..100 then Faker::Superhero.name.titlecase
  end
end


create_count.times do
  series = Series.create(
    name: generate_series_name,
    publisher_id: Publisher.ids.sample
  )
  progressbar.increment
end
