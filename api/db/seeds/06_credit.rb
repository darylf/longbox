progressbar = ProgressBar.create(
  title: 'Creating Book Credits',
  total: Book.count
)

role_dictionary = {}
CreditRole.ids.each do |role_id|
role_dictionary[role_id] = CreditRole.ids.sample
end

Book.ids.each do |book_id|
  role_dictionary.to_a.each do |rd|
    Credit.create(
      book_id: book_id,
      credit_role_id: rd[0],
      creator_id: rd[1]
    )
  end
  progressbar.increment
end
