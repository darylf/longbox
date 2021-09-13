ARTIST_ID = CreditRole.find_by(name: 'Artist').id
WRITER_ID = CreditRole.find_by(name: 'Writer').id
ROLE_IDS = CreditRole.where.not(id: ARTIST_ID).or(CreditRole.where.not(id:WRITER_ID)).ids
CREATOR_IDS = Creator.ids

series_hash = {}
Series.ids.each do |series_id|
  series_hash[series_id] = [ARTIST_ID,WRITER_ID].concat(ROLE_IDS.sample(rand(4..ROLE_IDS.size))).to_set.map { |id| {creator_id: Creator.ids.sample, role_id: id}}
end

progressbar = create_progress_bar(
  title: 'Creating Credits',
  total: Book.all.size * CreditRole.all.size
)

series_hash.keys.each do |k|
  Book.where(series: k).each do |book|
    series_hash[k].each do |v|
      featured = [WRITER_ID, ARTIST_ID].include? v[:role_id]
      Credit.create(
        book_id: book.id,
        credit_role_id: v[:role_id],
        creator_id: v[:creator_id],
        featured: featured,
        position: featured ? v[:role_id] : nil,
        created_by: ADMIN_USER,
        updated_by: ADMIN_USER
      )
      progressbar.increment
    end
  end
end
