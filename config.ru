require 'sass/plugin/rack'
require './server'

Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

# disable buffering for Heroku Logplex
$stdout.sync = true

run Sinatra::Application
