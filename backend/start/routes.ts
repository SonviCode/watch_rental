/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.post('/signup', [AuthController, 'signup'])
    router.post('/verify-email', [AuthController, 'verifyEmail'])
    router.post('/verify-sms-code', [AuthController, 'verifySMSCode'])
    router.post('/login', [AuthController, 'login'])
  })
  .prefix('auth')
  .prefix('api')

// router.get('/watchs', async () => {
//   return {
//     hello: 'watchs',
//   }
// })
