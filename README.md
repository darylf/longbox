# Longbox

:warning: **This code is a work in progress. It should be considered unstable, untested, and unsupported.** :warning:

## Overview

This is a comic book collection tracking app that allows a user to organize their collection and browse various statistics related to their reading habits. Future ideas and enhancements include:

  * Track a pull list of upcoming releases. 
  * Graph purchases and spending over time.
  * Identify trending writers and artists in their collection.

Note: For development purposes, PostgreSQL runs in a docker container. In production, PostgreSQL should run in its own environment and the `config/database.yml` file should be updated.

## Dependencies

  * Docker
  * Docker Compose

## Technical Overview

### API Container
  * Ruby 2.6
  * PostgreSQL
  * Puma
  * Rails 6.x
  * Rspec
  * GraphQL

### Web Client Container
  * Typescript
  * React
  * Apollo GraphQL Client

## Build and run the project

    docker-compose build
    docker-compose run webapp rake db:create
    docker-compose run webapp rake db:migrate
    docker-compose up

    # Optional
    docker-compose run webapp rake db:seed

## Running the test suite

    docker-compose build
    docker-compose run webapp rake db:create
    docker-compose run webapp rake db:migrate
    docker-compose run web rspec
