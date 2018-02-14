class ApplicationMailerPreview < ActionMailer::Preview
  message = Message.first()

  def new_message_from_website(message)
    @message = message
    default_reciver = "info@cafehostel.com.br"
    ApplicationMailer.new_message_from_website(message)
  end
end
