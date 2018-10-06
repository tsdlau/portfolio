require 'sinatra'
require 'hamlit'

class Portfolio < Sinatra::Application
  enable :sessions

  configure :production do
    set :haml, { escape_html: false }
    set :clean_trace, true
  end

  configure :development do
    set :haml, { escape_html: false }
    set :clean_trace, true
  end
end

require_relative 'blog_routes'
require_relative 'home_routes'
