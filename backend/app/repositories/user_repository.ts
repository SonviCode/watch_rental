import User from '#models/user'
import { userPayload } from '#types/payload/user_payload'

export default class UserRepository {
  /**
   * add a user
   * 
   * @param userData data info to create a user
   * @returns the new user created
   */
  static async add(userData: userPayload) {
    return await User.create(userData)
  }

  /**
   * retrieve all users - only for admin
   *
   * @returns all users
   */
  static async findAll() {
    return await User.all()
  }

  /**
   * retrieve user by id
   *
   * @param userId
   * @returns user
   */
  static async findById(userId: string) {
    const user = await User.findOrFail(userId)

    await user?.load('address')

    return user
  }
}
