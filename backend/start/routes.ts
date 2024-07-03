/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const AuthController = () => import('#controllers/auth_controller')
const UserController = () => import('#controllers/user_controller')

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router
  .group(() => {
    router
      .group(() => {
        router.post('/signup', [AuthController, 'signup'])
        router.post('/login', [AuthController, 'login'])
        router.post('/logout', [AuthController, 'logout'])
        router.post('/resend-otp-email', [AuthController, 'resendOtpEmail']).use(middleware.auth())
        router.post('/verify-email', [AuthController, 'verifyEmail']).use(middleware.auth())
        router.post('/verify-sms-code', [AuthController, 'verifySMSCode']).use(middleware.auth())
      })
      .prefix('auth')
    router
      .group(() => {
        router.get('/:id', [UserController, 'getUserById'])
        router.get('/', [UserController, 'getUserConnectedInfo'])
        router.get('/all', [UserController, 'getAllUsers'])
      })
      .use(middleware.auth())
      .prefix('user')
  })
  .prefix('api')

// router.get('/watchs', async () => {
//   return {
//     hello: 'watchs',
//   }
// })
