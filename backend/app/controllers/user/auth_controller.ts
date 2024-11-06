import { EMAIL_IS_VERIFIED, OTP_EMAIL_IS_RESEND } from '#constants/constants'
import User from '#models/user'
import OtpService from '#services/otp_service'
import env from '#start/env'
import { loginValidator, signUpValidator } from '#validators/auth_validator'
import type { HttpContext } from '@adonisjs/core/http'
import twilio from 'twilio'

const accountSid = env.get('TWILIO_ACCOUNT_SID')
const authToken = env.get('TWILIO_AUTH_TOKEN')

const client = twilio(accountSid, authToken)

export default class AuthController {
  async signup({ request, response }: HttpContext) {
    // if (!body['g-recaptcha-response']) {
    //   return response.abort({ errors: [{ message: CAPTCHA_NOT_VALID }] })
    // }

    const body = await request.validateUsing(signUpValidator)

    const user = await User.create(body)

    return response.created(user)
  }

  async login({ request, auth, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)

    if (!user.emailIsVerified) await OtpService.sendOtpVerificationEmail(user)

    // if (user.emailIsVerified && !user.smsIsVerified) await OtpService.sendOtpVerificationSms(user)

    return response.status(200)
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.status(204)
  }

  async verifySMS({ request, response }: HttpContext) {
    const smsCode = await request.input('code')

    client.verify.v2
      .services('VA49263bcab5d0110d6d94e8674579bd14')
      .verificationChecks.create({ to: '+33782934530', code: smsCode })
      .then((verification_check) => console.log(verification_check.status))

    return response.created('test')
  }

  async resendOtpSms({ auth, response }: HttpContext) {
    client.messages
      .create({
        body: 'Hello from twilio-node',
        to: '+33782934530', // Text your number
        from: '+33782934530', // From a valid Twilio number
      })
      .then((message) => console.log(message.sid))

    return response.created('test')
  }

  async verifyEmail({ request, auth, response }: HttpContext) {
    try {
      await OtpService.verifyOtpEmail(request, auth)
      return response.status(200).send(EMAIL_IS_VERIFIED)
    } catch (error) {
      return response.status(400).send(error)
    }
  }

  async resendOtpEmail({ auth, response }: HttpContext) {
    const user = await User.findOrFail(auth.user?.id)

    await OtpService.sendOtpVerificationEmail(user)

    return response.status(200).send(OTP_EMAIL_IS_RESEND)
  }

  async isAdmin({ auth, response }: HttpContext) {
    const user = await User.findOrFail(auth.user?.id)
    const role = user.role

    return response.send(role === env.get('ROLE_ADMIN'))
  }
}
