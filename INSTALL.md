Installing Long Box Server
==========================

The easiest method of installing a local Long Box Server may be to clone this
repository and run a local docker instance.

If you want to manually set up Long Box Server from source, follow the
instructions for manual installation.

Configuration
-------------

Environment configuration settings can be found in the `.env` file.


Running From Docker
-------------------

You can run everything by typing: `docker-compose up --build`

List containers using `docker-compose ps`

### Reset the database

    docker-compose exec --user "$(id -u):$(id -g)" website rails db:reset

### Reset the database

    docker-compose exec --user "$(id -u):$(id -g)" website rails db:migrate

### Access the database

    docker-compose exec --user "$(id -u):$(id -g)" website rails db:reset


Running Manually
----------------

### Prerequisites

1. A Unix based operating system

 The Long Box development team uses a variety of Linux distributions, but
 Mac OS X will work just fine. If you are running Windows we recommend you
 set up a virtual machine.

 **This document will assume you are using Ubuntu (at least 14.04) for its
 instructions.**

2. Ruby (at least version 2.5.1)

 Ruby comes bundled with most Linux operating systems, you can check your
 installed version of Ruby with:

    ruby -v

 You may prefer to use Ruby Version Manager (rvm) to manage your local
 Ruby installations.

3. PostgreSQL (at least version 9.5)

 PostgreSQL is required, along with its development libraries. To install
 using packages run the following, replacing 9.x with the latest version.
 If needed, packages of all supported PostgreSQL versions for various Ubuntu
 releases are available from the [PostgreSQL apt repository](http://www.postgresql.org/download/linux/ubuntu/).

    sudo apt-get install postgresql-9.x postgresql-server-dev-9.x postgresql-contrib-9.x

4. Git

 The Long Box development team uses Git for their version control system.
 To install Git, run the following:

    sudo apt-get install git-core

5. Redis

 Sessions and cached entities are stored in Redis, so a running Redis server
 is required. Redis can be installed with the following command and will not
 need any further configuration:

    sudo apt-get install redis-server

 The databases and key prefix used by musicbrainz can be configured
 in lib/DBDefs.pm. The defaults should be fine if you don't use
 your redis install for anything else.

6. Standard Development Tools

 In order to install some of the required Ruby and Postgresql modules, you'll
 need a C compiler and make. You can install a basic set of development tools
 with the command:

 sudo apt-get install build-essential

### Install Ruby using rbenv (optional)

As the install user:

    git clone https://github.com/rbenv/rbenv.git ~/.rbenv

Add to .bashrc

    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init -)"
    export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"

Install ruby-build

    git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

Install ruby 2.4.0

    rbenv install 2.4.0

And run it

    rbenv global 2.4.0

Install bundler

    gem install bundler

### Installing Long Box Server

Ensure Rails 5 is installed. Install the necessary gems:

    bundle install
    rails db:reset
    rails server
