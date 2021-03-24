# Longbox

**The comic book collection community**

Welcome to the Longbox codebase, the platform that powers comic book collectors to track their reading habits
across various platforms. This code is a work in progress and should be considered unstable, untested, and
unsupported. With your help, we can build out Longbox's usability, scalability, and stability to better serve
our community.

## What is Longbox?

Longbox is open source software for allowing comic book fans to organize their collection and track their
reading habits. Users can browse for new books and discover new things to read.

Future ideas and enhancements include:

- Create and share lists of books.
- Track a pull list of upcoming releases.
- Graph purchases and spending over time.
- Identify trending writers and artists in their collection.

## Getting Started

Note: For development purposes, PostgreSQL runs in a docker container. In production, PostgreSQL should run in
its own environment and the `config/database.yml` file should be updated.

We run on a [Rails](https://rubyonrails.org/) backend, a [PostgreSQL](https://www.postgresql.org/) database,
with a [React](https://reactjs.com/) frontend written in [TypeScript](https://www.typescriptlang.org/).

Installing to your local machine can be troublesome for many reasons such as a conflicting database and runtime versions.
The best way to get a development environment up and running is with containers. They will set up everything you need in
an isolated environment, and you need not worry about the details of setting everything up locally.

#### Containers

**Prerequisites**

- [Docker](https://github.com/containers/libpod) 20.10.3 or higher
- [Docker Compose](https://github.com/containers/podman-compose) 1.27.4 or higher

**Setting up Longbox for local development**

1. Fork our repository, e.g. [https://github.com/darylf/longbox/fork](https://github.com/darylf/longbox/fork)
2. Clone your forked repository, eg. git clone https://github.com/<your-username>/longbox.git
3. Configure your environment variables/secrets. The entire _config_ directory is ignored in git.

   1. Create `/config/api.env` and add the following block (note: values are examples only):
      ```
      RUBY_VERSION="3.0.0"
      DATABASE_URL=postgres://postgres:@db
      DATABASE_NAME=longbox
      DATABASE_USERNAME=postgres
      DATABASE_PASSWORD=postgres
      RAILS_ENV=development
      RAILS_MASTER_KEY=183bf7c8c90863427474c200766b1b4c
      SECRET_KEY_BASE=00401dc240ad276fb9bf8282343d1f33f0a8412ebe1c271726864c38a89cbb0559dad1d451ba8cdfa0b25740284f0b91efa9c3621bbe981cf51f4ccf5d08d2f3
      ```
   2. Create `/config/db.env` and add the following block (note: values are examples only):
      ```
      POSTGRES_USERNAME=postgres
      POSTGRES_PASSWORD=postgres
      ```

**Running Longbox locally**

1. Run `make build-local`
2. Run `make up-local`
3. Run `make logs-local`
4. Navigate to [http://localhost](http://localhost)

## Core team

- [@darylfritz](https://github.com/darylf)

## Acknowledgments

Thank you to the [Line Awesome](https://icons8.com/line-awesome) project for the usage of their icons.

## License

This program is free software: you can redistribute it and/or modify it under the terms of the MIT License as
published by the Massachusetts Institute of Technology. Please see the [LICENSE](./LICENSE.md) file in our
repository for the full text.
