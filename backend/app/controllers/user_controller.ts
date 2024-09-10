import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  async getUserConnectedInfo({ auth, response }: HttpContext) {
    const user = await User.find(auth.user?.id)

    return response.ok(user)
  }

  async getAllUsers({ response }: HttpContext) {
    console.log('test')

    const users = await User.all()

    console.log(users)

    return response.ok(users)
  }

  async getUserById({ request, response }: HttpContext) {
    const userId = request.param('id')

    const user = await User.find(userId)

    return response.ok(user)
  }
}
