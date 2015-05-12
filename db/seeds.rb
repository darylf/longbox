# Seed the database with the big three
marvel = Publisher.where(name: 'Marvel Comics').first_or_create
dc = Publisher.where(name: 'DC Comics').first_or_create
image = Publisher.where(name: 'Image Comics').first_or_create

# Add some series
s1 = Series.where(name: 'Avengers (1963)', publisher: marvel).first_or_create
s2 = Series.where(name: 'Batman (1940)', publisher: dc).first_or_create
s3 = Series.where(name: 'Saga', publisher: image).first_or_create

# Add some books
Book.where(issue_number: '1', series: s1).first_or_create
Book.where(issue_number: '1', series: s2).first_or_create
Book.where(issue_number: '1', series: s3).first_or_create
