class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to posts_path
    else
      flash[:notice] = "Incorrect username and/or password."
      redirect_to controller: "sessions", action: "new"
    end
  end

  def destroy
    session.clear
    redirect_to root_path
  end

end
