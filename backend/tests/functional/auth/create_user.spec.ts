import { UserFactory } from '#database/factories/user_factory'
import hash from '@adonisjs/core/services/hash'
import { test } from '@japa/runner'

test.group('creating user', () => {
  test('hashes user password', async ({ assert }) => {
    const user = await UserFactory.create()
    user.password = 'secret'

    await user.save()

    assert.isTrue(hash.isValidHash(user.password))
    assert.isTrue(await hash.verify(user.password, 'secret'))
  })

  // test('user without password', async ({ assert }) => {
  //   const user = await UserFactory.create()
  //   user.password = '1234567'

  //   await user.save()

  //   assert.isFalse(hash.isValidHash(user.password))
  //   assert.isFalse(await hash.verify(user.password, ''))
  // })

  test('user without right parameters', async ({ assert }) => {
    const user = await UserFactory.create()
    user.password = ''
    user.firstName = ''

    await user.save()

    assert.isFalse(hash.isValidHash(user.password))
    assert.isFalse(await hash.verify(user.password, ''))
  })

  // test('sign up', async ({ assert }) => {

  //   const authController = new AuthController()

  //   authController.signup({})

  //   const user = createRandomUser()
  //   user.password = ''
  //   user.firstName = ''

  //   await user.save()

  //   assert.isFalse(hash.isValidHash(user.password))
  //   assert.isFalse(await hash.verify(user.password, ''))
  // })
})
