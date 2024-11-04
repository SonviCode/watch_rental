import User from '#models/user'
import UserOtpVerification from '#models/user_otp_verification'
import env from '#start/env'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'
import type { Request } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import twilio from 'twilio'
import MailService from './mail_service.js'

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
      MailService.sendOtpVerification(user, otp)

      UserOtpVerification.updateOrCreate({ user_id }, { user_id, otp: otpHashed })
    } catch (error) {}
  }

  static async verifyOtpEmail(request: Request, auth: Authenticator<Authenticators>) {
    const otpCode = await request.input('code')
    const user = await User.findOrFail(auth.user?.id)
    const userOtpverif = await UserOtpVerification.findBy('user_id', auth.user?.id)

    const isExperied = Date.now() > userOtpverif?.expiresAt.getTime()!
    if (isExperied) throw new Error('Code expiré !')

    const otpIsChecked = await hash.verify(userOtpverif?.otp!, otpCode)
    if (!otpIsChecked) throw new Error('Mauvais code !')

    MailService.emailVerified(user)

    user.emailIsVerified = true
    await user.save()
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
