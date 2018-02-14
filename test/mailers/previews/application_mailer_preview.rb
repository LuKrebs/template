# Preview all emails at http://localhost:3000/rails/mailers/application_mailer
class ApplicationMailerPreview < ActionMailer::Preview

  def new_message_from_website
    message = Message.first
    default_reciver = "info@cafehostel.com.br"
    ApplicationMailer.new_message_from_website(message)
  end

end
