series_hash = {}
Series.all.each do |s|
  series_hash[s.id] = get_number_to_create(BOOKS_ON_EACH_SERIES)
end

progressbar = create_progress_bar(
  title: 'Creating Books',
  total: series_hash.values.sum
)

comic = BookFormat.find_or_create_by(name: 'Comic')

series_hash.keys.each do |series_id|
  pub_date = Faker::Date.in_date_period(year: rand(1980..2019), month: rand(1..12))
  series_hash[series_id].times do |n|
    pub_date = pub_date + 1.month + rand(1..14).days
    book = Book.create(
      series_id: series_id,
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
