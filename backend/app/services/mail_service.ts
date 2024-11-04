import Rental from '#models/rental'
import User from '#models/user'
import mail from '@adonisjs/mail/services/main'

export default class MailService {
  static async sendOtpVerification(user: User, otp: string) {
    await mail.send((message) => {
      message
        .from('service@tempo.fr')
        .to(user.email)
        .subject('Vérification de votre e-mail')
        .htmlView('emails/verify_email_html', { user, otp })
      // message.textView('emails/verify_email_text', user)
    })
  }

  static async emailVerified(user: User) {
    await mail.send((message) => {
      message
        .from('service@tempo.fr')
        .to(user.email)
        .subject('Votre e-mail a bien été vérifié !')
        .htmlView('emails/verified_email_html', { user })
      // message.textView('emails/verify_email_text', user)
    })
  }

  static async paymentSuccessful(rental: Rental) {
    const { user } = rental
    const { subscription } = rental

    console.log(rental)

    await mail.send((message) => {
      message
        .from('service@tempo.fr')
        .to(user.email)
        .subject('Confirmation de paiement')
        .htmlView('emails/confirm_payment_email_html', { user, subscription })
      // message.textView('emails/verify_email_text', user)
    })
  }
}
