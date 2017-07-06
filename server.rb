require 'sinatra'
require 'hamlit'

use Rack::Deflater
set :haml, { escape_html: false }

get '/' do
  redirect '/home'
end

get '/home' do
  haml :'home/home', layout: :'home/layout'
end

# get '/photos' do
#   haml :'home/photos', layout: false
# end

get '/resume' do
  send_file File.join(settings.public_folder, '/resume.pdf')
end

get '/blog' do
  haml :'blog/blog', layout: :'blog/layout_blog'
end

get '/microinteractions' do
  haml :'blog/microinteractions', layout: :'blog/layout_blog'
end

get '/groupdynmics' do
  haml :'blog/groupdynamics', layout: :'blog/layout_blog'
end

get '/parallax' do
  haml :'blog/parallax', layout: :'blog/layout_blog'
end
