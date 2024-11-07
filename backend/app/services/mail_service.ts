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
    })
  }

  static async emailVerified(user: User) {
    await mail.send((message) => {
      message
        .from('service@tempo.fr')
        .to(user.email)
        .subject('Votre e-mail a bien été vérifié !')
        .htmlView('emails/verified_email_html', { user })
    })
  }

  static async paymentSuccessful(rental: Rental) {
    const { user, subscription } = rental

    console.log(import.meta.url)

    await mail.send((message) => {
      message
        .from('service@tempo.fr')
        .to(user.email)
        .subject('Confirmation de paiement')
        .htmlView('emails/confirm_payment_email_html', { user, subscription })
    })
  }
}
