class ApplicationMailer < ActionMailer::Base
  default from: 'novo_contato_site@cafehostel.com.br'
  layout 'mailer'

  def new_message_from_website(message)
    @message = message

    default_reciver = "info@cafehostel.com.br"
    mail(to: default_reciver, subject: 'Novo contato do site')
  end
end
