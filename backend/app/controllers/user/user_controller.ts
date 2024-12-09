import UserRepository from '#repositories/user_repository'
import { HttpContext } from '@adonisjs/core/http'

export default class UserController {
  /**
   * get user by id, id is retrieve directly in the adonis session
   * 
   * @param param : id
   * @returns user
   */
  async getUserConnectedInfo({ auth, response }: HttpContext) {
    const userId = auth.user?.id

    const user = await UserRepository.findById(userId!)

    return response.ok(user)
  }

  /**
   * get all users - only for admin
   *
   * @returns all users
   */
  async getAllUsers({ response }: HttpContext) {
    const users = UserRepository.findAll()

    return response.ok(users)
  }

  /**
   * get user by id
   *
   * @param param : id
   * @returns user
   */
  async getUserById({ request, response }: HttpContext) {
    const userId = request.param('id')

    const user = await UserRepository.findById(userId)

    return response.ok(user)
  }
}
