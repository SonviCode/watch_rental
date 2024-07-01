import User from '#models/user'
import UserOtpVerification from '#models/user_otp_verification'
import mail from '@adonisjs/mail/services/main'
import hash from '@adonisjs/core/services/hash'

export default class OtpService {
  static async sendOtpVerificationEmail(user: User) {
    try {
      const userOtp = new UserOtpVerification()

      const otp = `${Math.floor(100000 + Math.random() * 900000)}`

      const otpHashed = await hash.make(otp)

      await mail.send((message) => {
        message.from('service@tempo.fr').to(user.email).from('info@example.org').subject('test')
        message.htmlView('emails/verify_email_html', { user, otp })
        // message.textView('emails/verify_email_text', user)
      })

      userOtp.fill({ user_id: user.id, otp: otpHashed }).save()
    } catch (error) {}
  }
}
