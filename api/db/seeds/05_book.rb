progressbar = ProgressBar.create(
  title: 'Creating Books',
  total: Series.count * BOOKS_ON_EACH_SERIES
)

comic = BookFormat.find_or_create_by(name: 'Comic')

Series.all.each do |series|
  pub_date = Faker::Date.in_date_period(year: rand(1980..2019), month: rand(1..12))
  BOOKS_ON_EACH_SERIES.times do |n|
    pub_date = pub_date + 1.month + rand(1..14).days
    book = Book.create(
      series_id: series.id,
      issue: n+1,
      book_type: comic,
      summary: Faker::Lorem.paragraph,
      page_count: 23,
      price: 2.99,
      publication_date: pub_date,
      age_rating: 'general'
    )
    progressbar.increment
  end
end
