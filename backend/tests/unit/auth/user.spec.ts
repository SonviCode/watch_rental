import { UserFactory } from '#database/factories/user_factory'
import hash from '@adonisjs/core/services/hash'
import { test } from '@japa/runner'

test.group('user in database', () => {
  test('hashes user password', async ({ assert }) => {
    const user = await UserFactory.create()

    await user.save()

    assert.isTrue(hash.isValidHash(user.password))
    assert.isTrue(await hash.verify(user.password, 'test'))
  })
})
