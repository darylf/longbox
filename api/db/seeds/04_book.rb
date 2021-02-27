progressbar = ProgressBar.create(
  title: 'Creating Books',
  total: Series.count * BOOKS_ON_EACH_SERIES
)

comic = BookFormat.find_or_create_by(name: 'Comic')

Series.all.each do |series|
  BOOKS_ON_EACH_SERIES.times do |n|
    book = Book.create(
      series_id: series.id,
      issue: n+1,
      book_type: comic
    )
    progressbar.increment
  end
end
