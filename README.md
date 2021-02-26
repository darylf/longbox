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

**Setting up Longbox**

1. Fork our repository, e.g. https://github.com/darylf/longbox/fork
2. Clone your forked repository, eg. git clone https://github.com/<your-username>/longbox.git
3. Set up your environment variables/secrets
4. Create `.env` by copying from the provided template `.env_sample`


    `.env` is a personal file that is ignored in git.<br/>
    `.env` lists all the `ENV` variables we use and provides a fake default for any missing keys.

**Running Longbox**

1. Run docker-compose build
2. Run docker-compose up
3. Navigate to http://localhost

## Core team

- [@darylfritz](https://github.com/darylf)

## Acknowledgments

Thank you to the [Line Awesome](https://icons8.com/line-awesome) project for the usage of their icons.

## License

This program is free software: you can redistribute it and/or modify it under the terms of the MIT License as
published by the Massachusetts Institute of Technology. Please see the [LICENSE](./LICENSE.md) file in our
repository for the full text.
