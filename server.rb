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

get '/resume.pdf' do
  send_file File.join(settings.public_folder, '/resume.pdf')
end
