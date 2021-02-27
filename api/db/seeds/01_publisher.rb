progressbar = ProgressBar.create(
  title: 'Creating Publishers',
  total: 3
)

def generate_publisher_name
  case rand(1..100)
  when 1..30 then "#{Faker::Commerce.department} Publishing".titlecase
  when 30..60 then "#{Faker::Color.color_name} #{Faker::Hacker.noun} Comics".titlecase
  when 60..100 then "#{Faker::Bank.name.titlecase} Books".titlecase
  end
end

['Marvel Comics', 'DC Comics', 'Image Comics'].each do |t|
  Publisher.create name: t
  progressbar.increment
end
