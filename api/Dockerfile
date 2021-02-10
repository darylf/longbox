FROM ruby:3.0.0
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client \
    && apt-get clean autoclean && apt-get autoremove -y \
    && rm -rf /var/lib/apt /var/lib/dpkg /var/lib/cache /var/lib/log
WORKDIR /srv/www-api
COPY Gemfile Gemfile.lock /srv/www-api/
RUN bundle install
COPY . /srv/www-api

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
