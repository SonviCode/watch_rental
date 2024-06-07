import User from '#models/user'
import env from '#start/env'
import { loginValidator, signUpValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import twilio from 'twilio'

const accountSid = env.get('TWILIO_ACCOUNT_SID')
const authToken = env.get('TWILIO_AUTH_TOKEN')

const client = twilio(accountSid, authToken)

export default class AuthController {
  async signup({ request, response }: HttpContext) {
    const body = request.body()
    body.location = JSON.parse(body.location)

    const payload = await signUpValidator.validate(body)

    const user = await User.create(payload)

    return response.created(user)
  }

  async login({ request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)

    return response.ok({
      token: token,
      ...user.serialize(),
    })
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

  async verifyEmail({ request, response }: HttpContext) {
    const smsCode = await request.input('code')

    console.log(smsCode)

    client.verify.v2
      .services('VA49263bcab5d0110d6d94e8674579bd14')
      .verificationChecks.create({ to: '+33782934530', code: smsCode })
      .then((verification_check) => console.log(verification_check.status))

    return response.created('test')
  }
}
