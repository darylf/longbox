FROM ruby:2.5.1

RUN apt-get update && apt-get install -y \
    libpq-dev \
    build-essential \
    nodejs \
    yarn

RUN gem install bundler

RUN mkdir -p /srv
WORKDIR /srv

ADD Gemfile /srv
ADD Gemfile.lock /srv
RUN bundle install

ADD . /srv

EXPOSE 3000

CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0"]