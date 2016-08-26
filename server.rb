require 'sinatra'
require 'sinatra/activerecord'
require './environments'
require 'hamlit'
require 'pg'

use Rack::Deflater
set :haml, { escape_html: false }

class Post < ActiveRecord::Base
end

get '/' do
  redirect '/home'
end

get '/home' do
  haml :home
end

get '/blog' do
  haml :blog, layout: false
end

get '/photos' do
  haml :photos, layout: false
end

get '/resume.pdf' do
  send_file File.join(settings.public_folder, '/resume.pdf')
end
