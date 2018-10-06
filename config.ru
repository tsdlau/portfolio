require 'active_support/core_ext/hash/compact'
require 'active_support/core_ext/module'
require 'sass/plugin/rack'
root = ::File.dirname(__FILE__)
require ::File.join( root, 'app' )
Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack
$stdout.sync = true

run Portfolio.new
