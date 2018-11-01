class StaticController < ApplicationController
  def home
    if logged_in?
      redirect_to posts_path
    end
  end
end
