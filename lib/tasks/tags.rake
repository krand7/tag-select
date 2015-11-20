require 'yaml'

namespace :tags do
  desc "Create default tags"
  task load_seeds: :environment do
    seeds = ["AngularJS", "BackboneJS", "CSS", "Coffeescript", "Django", "EmberJS", "Facebook API", "Google Material Design", "HAML", "HTML", "Instagram API", "Javascript", "MySQL", "PHP", "Parallax", "PostgreSQL", "Python", "Rails", "ReactJS", "Ruby", "SCSS", "Salesforce", "Stripe", "Twitter API", "Twitter Bootstrap", "Wordpress"]
    seeds.each do |seed_title|
      tag = Tag.create(title: seed_title)
      puts "Created: " + tag.title
    end
  end
end
