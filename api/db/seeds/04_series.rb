create_count = get_number_to_create(SERIES_TO_CREATE)

progressbar = ProgressBar.create(
  title: 'Creating Series',
  total: create_count
)

PUBLISHER_IDS = Publisher.ids

def generate_series_name
  case rand(1..100)
  when 1..30 then "#{Faker::Superhero.prefix} #{Faker::Superhero.power}"
  when 30..60 then "#{Faker::Name.name} #{Faker::Superhero.suffix}"
  when 60..80 then "#{Faker::Name.prefix } #{Faker::FunnyName.three_word_name} #{Faker::Name.suffix}"
  when 80..90 then Faker::Superhero.name
  when 90..100 then "#{Faker::Military.space_force_rank} #{Faker::Games::DnD.race.pluralize}"
  end
end


create_count.times do
  series = Series.find_or_create_by(
    name: generate_series_name,
    publisher_id: PUBLISHER_IDS.sample,
    created_by: ADMIN_USER,
    updated_by: ADMIN_USER
  )
  progressbar.increment
end
