source 'https://rubygems.org'

ruby '2.1.3'

gem 'rails', '4.2.1'

gem 'haml-rails'
gem 'jbuilder', '~> 2.0'
gem 'jquery-rails'
gem 'sass-rails', '~> 5.0'

gem 'database_cleaner', group: :test

group :development, :test do
  gem 'factory_girl_rails'
	gem 'rspec-rails'
  gem 'sqlite3'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end