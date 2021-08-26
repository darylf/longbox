progressbar = ProgressBar.create(
  title: 'Creating Book Credits',
  total: Book.count * CreditRole.count
)

WRITER_ID = CreditRole.find_by(name: 'Writer')
ARTIST_ID = CreditRole.find_by(name: 'Artist')
CREATOR_ID = CreditRole.find_by(name: 'Creator')
ROLE_IDS = CreditRole.ids
CREATOR_IDS = Creator.ids

Series.all.each do |series|
  role_dictionary = {}
  role_dictionary[CREATOR_ID] = CREATOR_IDS.sample
  role_dictionary[WRITER_ID] = CREATOR_IDS.sample
  role_dictionary[ARTIST_ID] = CREATOR_IDS.sample

  ROLE_IDS.sample(rand(2..ROLE_IDS.size)).each do |role_id|
    role_dictionary[role_id] = CREATOR_IDS.sample
  end

  series.books.ids.each do |book_id|
    role_dictionary.to_a.each do |rd|
      Credit.create(
        book_id: book_id,
        credit_role_id: rd[0],
        creator_id: rd[1]
      )
      progressbar.increment
    end
  end
end
