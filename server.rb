require 'sinatra/base'

class Bla < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  
end
