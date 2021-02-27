progressbar = ProgressBar.create(
  title: 'Creating Books',
  total: Series.count * BOOKS_ON_EACH_SERIES
)

comic = BookFormat.find_or_create_by(name: 'Comic')

role_dictionary = {}
CreditRole.ids.each do |role_id|
role_dictionary[role_id] = CreditRole.ids.sample
end

Series.all.each do |series|
  BOOKS_ON_EACH_SERIES.times do |n|
    book = Book.create(
      series_id: series.id,
      issue: n+1,
      book_type: comic
    )
    role_dictionary.to_a.each do |rd|
      Credit.create(book_id: book.id, credit_role_id: rd[0], creator_id: rd[1])
    end
    progressbar.increment
  end
end
