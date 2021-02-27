ARG RUBY_VERSION

######################
# Stage: Builder
FROM ruby:$RUBY_VERSION-alpine as Builder

ARG BUNDLE_WITHOUT
ARG RAILS_ENV
ARG NODE_ENV

ENV BUNDLE_WITHOUT ${BUNDLE_WITHOUT}
ENV RAILS_ENV ${RAILS_ENV}
ENV NODE_ENV ${NODE_ENV}
ENV SECRET_KEY_BASE=foo
ENV RAILS_SERVE_STATIC_FILES=true

RUN apk add --update --no-cache \
    build-base \
    postgresql-dev \
    git \
    imagemagick \
    nodejs-current \
    yarn \
    tzdata

WORKDIR /app

# Install gems
ADD Gemfile* /app/
RUN bundle install -j4 --retry 3 \
 # Remove unneeded files (cached *.gem, *.o, *.c)
 && rm -rf /usr/local/bundle/cache/*.gem \
 && find /usr/local/bundle/gems/ -name "*.c" -delete \
 && find /usr/local/bundle/gems/ -name "*.o" -delete

# Add the Rails app
ADD . /app


###############################
# Stage Final
FROM ruby:$RUBY_VERSION-alpine

ARG EXECJS_RUNTIME

# Add Alpine packages
RUN apk add --update --no-cache bash \
    postgresql-client \
    imagemagick \
    nodejs-current \
    yarn \
    tzdata \
    file

# Add user
RUN addgroup -g 1000 -S app \
    && adduser -u 1000 -S app -G app
USER app

# Copy app with gems from former build stage
COPY --from=Builder /usr/local/bundle/ /usr/local/bundle/
COPY --from=Builder --chown=app:app /app /app

WORKDIR /app
EXPOSE 3000
RUN date -u > BUILD_TIME

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
