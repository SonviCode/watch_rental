import { EMAIL_IS_VERIFIED, OTP_EMAIL_IS_RESEND } from '#constants/constants'
import User from '#models/user'
import UserOtpVerification from '#models/user_otp_verification'
import OtpService from '#services/otp_service'
import env from '#start/env'
import { loginValidator, signUpValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import twilio from 'twilio'

const accountSid = env.get('TWILIO_ACCOUNT_SID')
const authToken = env.get('TWILIO_AUTH_TOKEN')

const client = twilio(accountSid, authToken)

export default class AuthController {
  async signup({ request, response }: HttpContext) {
    const body = request.body()

    // if (!body['g-recaptcha-response']) {
    //   return response.abort({ errors: [{ message: CAPTCHA_NOT_VALID }] })
    // }

    body.location = JSON.parse(body.location)

    const payload = await signUpValidator.validate(body)

    const user = await User.create(payload)

    return response.created(user)
  }

  async login({ request, auth, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    await OtpService.sendOtpVerificationEmail(user)

    // await mail.send((message) => {
    //   message.from('service@tempo.fr').to(user.email).from('info@example.org').subject('test')
    //   message.htmlView('emails/verify_email_html', { user })
    //   // message.textView('emails/verify_email_text', user)
    // })

    return response.status(200)
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.status(204)
  }

  async verifySMSCode({ request, response }: HttpContext) {
    const smsCode = await request.input('code')

    console.log(smsCode)

    client.verify.v2
      .services('VA49263bcab5d0110d6d94e8674579bd14')
      .verificationChecks.create({ to: '+33782934530', code: smsCode })
      .then((verification_check) => console.log(verification_check.status))

    return response.created('test')
  }

  async verifyEmail({ request, auth, response }: HttpContext) {
    const otpCode = await request.input('code')

    const user = await User.findOrFail(auth.user?.id)

    const userOtpverif = await UserOtpVerification.findBy('user_id', auth.user?.id)

    const isExperied = Date.now() > userOtpverif?.expiresAt.getTime()!

    if (isExperied) return response.status(400).send('Code expiré !')

    const otpIsChecked = await hash.verify(userOtpverif?.otp!, otpCode)

    if (!otpIsChecked) return response.status(400).send('Mauvais code !')

    user.emailIsVerified = true

    await user.save()

    return response.status(200).send(EMAIL_IS_VERIFIED)
  }

  async resendOtpEmail({ auth, response }: HttpContext) {
    const user = await User.findOrFail(auth.user?.id)

    await OtpService.sendOtpVerificationEmail(user)

    return response.status(200).send(OTP_EMAIL_IS_RESEND)
  }

  async check({ response }: HttpContext) {
    return response.ok({
      message: 'login successful',
    })
  }
}
