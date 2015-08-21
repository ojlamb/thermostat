require 'sinatra/base'

class Bla < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  post '/' do
    puts "request successful"
  end

end
