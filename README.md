## About

Personal website to keep track of quibbles and projects using the Jekyll theme, [simple](https://github.com/wild-flame/jekyll-simple).

[7/2 Update]: Incorporated Claude to help revamp and modernize website. still a wip, but will iterate from here!

## Setup

Install rvm:

`$ \curl -sSL https://get.rvm.io | bash -s stable`

`$ gem install bundler --user-install`

`$ rvm install ruby 3.0.0 && rvm use 3.0.0`

`$ gem install jekyll`

For correct/updated ruby version -- just run brew install && brew update if you'd previously installed ruby prior.

If it's complaining about needing a specific json version (i.e. "Make sure that `gem install json -v '1.8.1'` succeeds before bundling.") run:

`$ bundle update`

Then finally to run locally to see any changes:

Run `$ bundle exec jekyll serve`
