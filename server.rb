require 'sinatra'
require 'haml'

use Rack::Deflater

get '/' do
  redirect '/home'
end

get '/home' do
  haml :home
end

get '/photos' do
  haml :photos, layout: false
end
