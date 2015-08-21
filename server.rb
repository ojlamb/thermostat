require 'sinatra/base'
# require 'json'

class Bla < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  post '/' do
    puts params
    puts params.keys[0]
  end

end
