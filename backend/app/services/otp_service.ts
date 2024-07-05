import User from '#models/user'
import UserOtpVerification from '#models/user_otp_verification'
import env from '#start/env'
import hash from '@adonisjs/core/services/hash'
import mail from '@adonisjs/mail/services/main'
import twilio from 'twilio'

const accountSid = env.get('TWILIO_ACCOUNT_SID')
const authToken = env.get('TWILIO_AUTH_TOKEN')

const client = twilio(accountSid, authToken)

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

  static async sendOtpVerificationSms(user: User) {
    try {
      client.messages
        .create({
          body: 'Hello from twilio-node',
          to: '+33782934530', // Text your number
          // to: user.phoneNumber, // TODO - format +33 user phone number
          from: '+12345678901', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid))
    } catch (error) {}
  }
}
