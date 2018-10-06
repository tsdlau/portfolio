class Portfolio < Sinatra::Application
  get '/blog' do
    haml :'blog/blog', layout: :'blog/layout_blog'
  end

  get '/microinteractions' do
    haml :'blog/microinteractions', layout: :'blog/layout_blog'
  end

  get '/weborientedculture' do
    haml :'blog/weborientedculture', layout: :'blog/layout_blog'
  end

  get '/parallax' do
    haml :'blog/parallax', layout: :'blog/layout_blog'
  end

  get '/cool_shit' do
    haml :'blog/cool_shit'
  end
end
