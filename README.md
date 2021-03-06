# README

This is a small project to experiment with EmberJS and Ruby on Rails.
In order to install the project locally, please complete the following steps:

### 1: Install Node.JS

NodeJS is required to run Ember. You can check if you have it by opening your console and entering:

`node --version`

If nothing promising appears, go ahead and install with homebrew (`brew install node`) or by visiting the download page (https://nodejs.org/en/download). Once you've done that, go ahead and rerun

`node --version`

### 2: Install Git

Git comes standard on macs (you may need to download developer command line tools if you haven't before) and most linux machines, but you will need to download it if you're using Windows. You can download from the following link - it will download immediately! (http://git-scm.com/download/win, FYI downloads automatically)

### 3: Install Ember and EmberCLI

If you haven't used Ember before, you'll have to install it, along with the associated command line utility

`npm install -g ember-cli`

This step will take a bit of time. Once it's over, verify the install:

`ember -v`

### 4: Clone the repository

To see the initial version, please clone from master:

`git clone https://github.com/krand7/tag-select.git`

To see the current version, please clone from master and then pull the recent 'added-fun' branch:

`git checkout added-fun`
`git pull`

### 5: Install ruby, rails, and gems

If you don't have ruby installed, you should install RVM and ruby for MacOS(https://github.com/remomueller/documentation/blob/master/macosx/130-install-rvm.md), CentOS(https://github.com/remomueller/documentation/blob/master/centos/130-install-rvm.md), Windows(https://github.com/remomueller/documentation/blob/master/windows/130-ruby.md), or Ubuntu(http://railsapps.github.io/installrubyonrails-ubuntu.html).

Once ruby is good to go, install the bundler gem:

`gem install bundler`

Then, install the required gems for the project:

`bundle install`

*Windows users: if you're running into an issue with installing the json gem, then your versions of DevKit and Ruby probably don't match. Please make sure you're using Ruby2.2.0, and a corresponding version of DevKit (http://rubyinstaller.org/downloads/)/

### 6: Setup database

This makes use of SQLite, so go ahead and run the migrations and load the model seeds:

`bundle exec rake db:create`

`bundle exec rake db:migrate`

`bundle exec rake tags:load_seeds`

### 7: Download ember dependencies

There are some dependencies that will need to be installed from the frontend application.

`cd frontend`

`bower install`

`ember install active-model-adapter`

`npm install ember-cli-rails-addon --save-dev ember-cli-rails-addon@0.0.11 node_modules/ember-cli-rails-addon`

`cd ..`

### 8: Fireup the server

Once you load the server for the first time, you'll probably have to refresh once:

`rails s`

### 9: Enjoy!

It's a pretty simplistic page, with a bit of fun added. EmberJS can be frustrating to get your head wrapped around, as most searches (both in documentation and on StackOverflow) tend to reference deprecated versions. Now that things are stabilizing with EmberJS, we can only hope that the community grows and interacts more, in order to develop the breadth of organic resources that us developers are used to having at their fingertips!
