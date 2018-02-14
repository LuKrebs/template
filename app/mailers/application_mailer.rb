class ApplicationMailer < ActionMailer::Base
  default from: 'luciano@krebs.com'
  layout 'mailer'

  def new_message_from_website(message)
    @message = message

    default_reciver = "lkrebs05@gmail.com"
    mail(to: default_reciver, subject: 'Novo contato do site')
  end
end
