class Portfolio < Sinatra::Application
  get '/' do
    redirect '/home'
  end

  get '/home' do
    haml :'home/home'
  end

  # get '/photos' do
  #   haml :'home/photos', layout: false
  # end

  get '/resume' do
    send_file File.join(settings.public_folder, '/resume.pdf')
  end
end
