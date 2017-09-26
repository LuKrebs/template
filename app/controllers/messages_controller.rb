class MessagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
    @message = Message.new
  end

  def create
      @message = Message.new(message_params)
      if @message.valid?
        @message.save!
        render 'welcome/contact'
      else
        redirect_to root_path
      end
  end

  private

    def message_params
      params.require(:message).permit(:name, :email, :subject, :content)
    end
end
