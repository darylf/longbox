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

#### Containers

**Linux**

- [Docker](https://github.com/containers/libpod) 20.10.3 or higher
- [Docker Compose](https://github.com/containers/podman-compose) 1.27.4 or higher

## Core team

- [@darylfritz](https://github.com/darylf)

## Acknowledgments

Thank you to the [Line Awesome](https://icons8.com/line-awesome) project for the usage of their icons.

## License

This program is free software: you can redistribute it and/or modify it under the terms of the MIT License as
published by the Massachusetts Institute of Technology. Please see the [LICENSE](./LICENSE.md) file in our
repository for the full text.
