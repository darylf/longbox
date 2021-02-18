# Design Document

The goal of the site is to let users track their comic book and graphic novel library, reading history, upcoming purchases, tag interesting/favourite stories, etc.

## Similar works

Existing book tracking sites:

- [Grand Comic Database](https://www.comics.org/)
- [League of Comic Geeks](https://leagueofcomicgeeks.com/)

Similar tracking sites for movies/television/anime/games:

- [AniList](https://anilist.co)
- [Backloggery](http://backloggery.com/)
- [Completionator](https://www.completionator.com/Game?platformIDs=53&sortColumn=GameName&sortDirection=ASC)
- [Kitsu](https://kitsu.io)
- [MyAnimeList](https://myanimelist.net/)
- [Trakt](https://trakt.tv)
- [vglist](https://vglist.co)

## Entities

User

- [ ] Users
  - [ ] Authentication with Devise
  - [ ] 2FA (via devise-two-factor probably)
  - [ ] Username
  - [ ] Display Name
  - [ ] Avatar
  - [ ] Users have a Book Library which contains Books
  - [ ] Users have a profile
- [ ] Profiles
  - [ ] Profiles can be Public or Private (only visible to Friends/Yourself? Username, Display Name, and Avatar will always be visible.)
  - [ ] Bio (a longer-form description of the user)
  - [ ] Book Library with format (physical, digital), "read" status, date purchased, etc.
- [ ] Followers/Following?)
  - [ ] Activity feed?
- [ ] Book Library
  - [ ] A wishlist
  - [ ] Score (e.g. have 1/10, 1.0/10, 10/100, and thumbs-up/thumbs-down)

Book

- [ ] Books (General): Books are an entity with a name, publisher, creator, a cover image, release dates, etc.
  - [ ] Name
  - [ ] Publisher(s) (Marvel, DC, Image, etc.)
  - [ ] Creators (should have a role associated. Author, Penciler, Colorer, etc)
  - [ ] Cover image
  - [ ] Release date(s) (note that a book can have more than one release date due to regional differences)
  - [ ] External Links (Comixology, Amazon, Publisher Homepage, etc.)
  - [ ] Relationships with other books (Floppies, Trades, Deluxe Editions, Omnibus, etc?)
  - [ ] Genre
    - Set defined genres? Keep it freeform? This is tough to distinguish, but could be kind of necessary.
  - [ ] Average Score
    - Maybe also Median or a more detailed bar graph of the scores?
  - [ ] Number of users who own the book / have read it / wishlisted it
- [ ] Books (In Library): A book in someone's library can be rated, can have format indicated (physical, digital, etc). It is essentially a subclass of Books (General).
  - [ ] Score/Rating
  - [ ] Format (physical, digital)
  - [ ] Read
  - [ ] Owned
    - What about previously-owned?
  - [ ] Notes (any notes you want to add about the book, essentially a mini review)
  - [ ] Favorite (you can favorite books in your library, which is tracked separately from your Score)
  - [ ] Physical/Digital
    - You can own a copy from Kindle or Comixology digitally as well as physically.

Publisher

- [ ] Publishers
  - [x] Name
  - [ ] Official website

Series

- [ ] Series
  - [x] Name
  - [ ] Books
  - [ ] Publisher

Creator

- [ ] Creators
  - [x] First name
  - [x] Last name
  - [ ] Books
  - [ ] Roles (author, penciler, colorer, etc)

## TODO

- [ ] Exporter (export your books list, probably as JSON)
- [ ] Build the initial system for importing book information from another source (build the book database from the Wikipedia/Wikidata? Somewhere else?)
- [x] API? _(This is a work in progress and the graphql is being built as we go along)_
- [ ] Book creation / modification
  - Implement "moderators" that can update information, e.g. adding missing genres or tags, changing the titles, etc.
  - We'll need some way for the user to create a book when a new one comes out.
  - Uploading cover art is another sticking point, since we'll need to host those images (not easy on Heroku).

Some decisions that need to be made:

- Should scores be a scale out of 10? To what precision? Or just thumbs up/down?
- Should there be an API? If so, should it be a REST API or use GraphQL?

Notes:

- Consider this UI design: https://preview.themeforest.net/item/boighor-books-library-ecommerce-store/full_screen_preview/22173065
