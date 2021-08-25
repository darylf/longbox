# Longbox

**The comic book collection community!**

Welcome to the Longbox codebase, the platform that powers comic book collectors
to track their reading habits across various platforms. This code is a work in
progress and should be considered unstable, untested, and unsupported. With
your help, we can build out Longbox's usability, scalability, and stability to
better serve our community.

## What is Longbox?

Longbox is open source software for allowing comic book fans to organize their
collection and track their reading habits. Users can browse for new books and
discover new things to read.

Future ideas and enhancements include:

- Create and share lists of books.
- Track a pull list of upcoming releases.
- Graph purchases and spending over time.
- Identify trending writers and artists in their collection.

## Getting Started

Note: For development purposes, PostgreSQL runs in a docker container. In
production, PostgreSQL should run in its own environment and the
`config/database.yml` file should be updated.

We run on a [Rails](https://rubyonrails.org/) backend, a
[PostgreSQL](https://www.postgresql.org/) database, with a
[React](https://reactjs.com/) frontend written in
[TypeScript](https://www.typescriptlang.org/).

Installing to your local machine can be troublesome for many reasons such as a
conflicting database and runtime versions. The best way to get a development
environment up and running is with containers. They will set up everything you
need in an isolated environment, and you need not worry about the details of
setting everything up locally.

### Containers

#### Prerequisites

- [Docker](https://www.docker.com/) 20.10.5 or higher
- [Docker Compose](https://docs.docker.com/compose/) 1.27.4 or higher

#### Setting up Longbox for local development

1. Fork our repository, e.g. [https://github.com/darylf/longbox/fork](https://github.com/darylf/longbox/fork)
2. Clone your forked repository, eg. git clone
   <https://github.com/{your-username}/longbox.git>
3. Configure the docker build environment by editing the .env file in the root
   directory. These settings configure which ports are exposed to the host
   machine.

   ```bash
   ## API
   LONGBOX_API_PORT=3001
   LONGBOX_DB_PORT=5432

   ## Web
   LONGBOX_WEB_PORT=3000

   ## Proxy
   LONGBOX_PROXY_PORT=80
   LONGBOX_PROXY_PORT_SSL=443
   ```

4. Configure your environment variables/secrets. The entire _config_ directory
   is ignored in git.

   1. Create `/config/api.env` and add the following block (note: values are
      examples only):

      ```bash
      RUBY_VERSION="3.0.2"
      DATABASE_URL=postgres://postgres:@db
      DATABASE_NAME=longbox
      DATABASE_USERNAME=postgres
      DATABASE_PASSWORD=postgres
      RAILS_ENV=development
      RAILS_MASTER_KEY=1234567890abcdef1234567890abcdef
      SECRET_KEY_BASE=1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
      ```

   2. Create `/config/db.env` and add the following block (note: values are
      examples only):

      ```bash
      POSTGRES_USERNAME=postgres
      POSTGRES_PASSWORD=postgres
      ```

#### Running Longbox locally

1. Run `make build-local`
2. Run `make up-local`
3. Run `make logs-local`
4. Navigate to [http://localhost](http://localhost)

Note: you can also run multiple commands in make, such as: `make build-local up-local logs-local`

## Core team

- [@darylfritz](https://github.com/darylf)

## Acknowledgments

Thank you to the [Line Awesome](https://icons8.com/line-awesome) project for the usage of their icons.

## License

This program is free software: you can redistribute it and/or modify it under
the terms of the MIT License as published by the Massachusetts Institute of
Technology. Please see the [LICENSE](./LICENSE.md) file in our repository for
the full text.
