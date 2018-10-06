require 'oauth2'
require 'json'


class GooglePhotoApi < Sinatra::Application
  def initialize
    binding.pry
  end
  def get_auth
    unless client_key
      raise 'G_API_CLIENT not set'
    end

    unless secret_key
      raise 'G_API_CLIENT not set'
    end

    get_auth_token
  end

  def client_key
    @client_key ||= ENV['GOOGLE_PHOTOS_CLIENT_ID']
  end

  def client
    @client ||= OAuth2::Client.new(client_key, secret_key, {
      site: 'https://acounts.google.com',
      authorize_url: '/o/oauth2/auth',
      token_url: '/o/oauth2/token'
      })
  end

  def secret_key
    @secret_key ||= ENV['GOOGLE_PHOTOS_CLIENT_SECRET']
  end

  def get_auth_token
    redirect client.auth_code.authorize_url(redirect_uri: redirect_uri, scope: SCOPES, access_type: 'offline')
  end

  get '/oauth2callback' do
    access_token = client.auth_code.get_token(params[:code], redirect_uri: redirect_uri)
    access_token.token
  end

  def redirect_uri
    uri = URI.parsed(request.uri)
    uri.path = '/oauth2callback'
    uri.query = nil
    uri.to_s
  end
end
