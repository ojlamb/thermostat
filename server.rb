require 'sinatra/base'
# require 'json'

class Bla < Sinatra::Base
  set :public_folder, proc { File.join(root) }
  enable :sessions
  post '/' do
    @temp = params.keys[0]
    p @temp
    session['temp'] = @temp
  end

  get '/' do
    session['temp']
  end

end
