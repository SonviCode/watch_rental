import { test } from '@japa/runner'
import hash from '@adonisjs/core/services/hash'
import { createRandomUser } from '#tests/faker/user_faker'

test.group('creating user', () => {
  test('hashes user password', async ({ assert }) => {
    const user = createRandomUser()
    user.password = 'secret'

    await user.save()

    assert.isTrue(hash.isValidHash(user.password))
    assert.isTrue(await hash.verify(user.password, 'secret'))
  })

  test('user without password', async ({ assert }) => {
    const user = createRandomUser()
    user.password = ''

    await user.save()

    assert.isFalse(hash.isValidHash(user.password))
    assert.isFalse(await hash.verify(user.password, ''))
  })
})
