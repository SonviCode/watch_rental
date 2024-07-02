import User from '#models/user'
import UserOtpVerification from '#models/user_otp_verification'
import hash from '@adonisjs/core/services/hash'
import mail from '@adonisjs/mail/services/main'

export default class OtpService {
  static async sendOtpVerificationEmail(user: User) {
    try {
      const otp = `${Math.floor(100000 + Math.random() * 900000)}`

      const otpHashed = await hash.make(otp)

      // eslint-disable-next-line @typescript-eslint/naming-convention
      const user_id = user.id

      await mail.send((message) => {
        message
          .from('service@tempo.fr')
          .to(user.email)
          .subject('Vérification de votre e-mail')
          .htmlView('emails/verify_email_html', { user, otp })
        // message.textView('emails/verify_email_text', user)
      })

      UserOtpVerification.updateOrCreate({ user_id }, { user_id, otp: otpHashed })
    } catch (error) {}
  }
}
