Personal website to keep track of quibbles and projects using the Jekyll theme, [simple](https://github.com/wild-flame/jekyll-simple).


Setup

Install rvm:
`\curl -sSL https://get.rvm.io | bash -s stable`
`gem install bundler`
`rvm install ruby 2.4.1`
`sudo gem install jekyll`

If it's complaining about needing a specific json version (i.e. "Make sure that `gem install json -v '1.8.1'` succeeds before bundling.") run:

`bundle update`

Then finally to run locally to see any changes:

Run `bundle exec jekyll serve`
