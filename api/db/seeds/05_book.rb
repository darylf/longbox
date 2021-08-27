create_count = []
Series.count.times do |n|
  create_count.push(n,get_number_to_create(1..12))
end

progressbar = ProgressBar.create(
  title: 'Creating Books',
  total: create_count.sum
)

comic = BookFormat.find_or_create_by(name: 'Comic')

Series.all.each_with_index do |series,n|
  pub_date = Faker::Date.in_date_period(year: rand(1980..2019), month: rand(1..12))
  create_count[n.to_i].times do |n|
    pub_date = pub_date + 1.month + rand(1..14).days
    book = Book.create(
      series_id: series.id,
      issue: n+1,
      book_format: comic,
      summary: Faker::Lorem.paragraph,
      page_count: 23,
      price: 2.99,
      publication_date: pub_date,
      age_rating: 'general',
      created_by: ADMIN_USER,
      updated_by: ADMIN_USER
    )
    progressbar.increment
  end
end
