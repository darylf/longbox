progressbar = ProgressBar.create(
  title: 'Creating Book Credits',
  total: Book.count * CreditRole.count
)

ARTIST_ID = CreditRole.find_by(name: 'Artist').id
WRITER_ID = CreditRole.find_by(name: 'Writer').id
CREATOR_IDS = Creator.ids

Series.all.each do |series|
  role_dictionary = {}
  role_dictionary[WRITER_ID] = CREATOR_IDS.sample
  role_dictionary[ARTIST_ID] = CREATOR_IDS.sample

  series.books.ids.each do |book_id|
    role_dictionary.to_a.each do |rd|
      featured = [WRITER_ID, ARTIST_ID].include? rd[0]
      Credit.create(
        book_id: book_id,
        credit_role_id: rd[0],
        creator_id: rd[1],
        featured: featured,
        position: featured ? rd[0] : nil,
        created_by: ADMIN_USER,
        updated_by: ADMIN_USER
      )
      progressbar.increment
    end
  end
end
