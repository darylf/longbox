publishers = ['Marvel', 'DC', 'Image', 'IDW', 'Dark Horse',
              'Dynamite Entertainment', 'BOOM! Studios',
              'Oni Press', 'Viz', 'Yen Press', 'Valiant',
              'Avatar', 'Zenescope', 'Fantagraphics', 'Archie',
              'Action Lab', 'Aspen Comics', 'Kodansha Comics']

progressbar = ProgressBar.create(
  title: 'Creating Publishers',
  total: publishers.size
)

def generate_publisher_name
  case rand(1..100)
  when 1..30 then "#{Faker::Commerce.department} Publishing".titlecase
  when 30..60 then "#{Faker::Color.color_name} #{Faker::Hacker.noun} Comics".titlecase
  when 60..100 then "#{Faker::Bank.name.titlecase} Books".titlecase
  end
end

publishers.each do |t|
  Publisher.create name: t, created_by: ADMIN_USER, updated_by: ADMIN_USER
  progressbar.increment
end
