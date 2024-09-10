const AuthController = () => import('#controllers/auth_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function authRoutes() {
  router
    .group(() => {
      router.post('/signup', [AuthController, 'signup'])
      router.post('/login', [AuthController, 'login'])
      router.post('/logout', [AuthController, 'logout'])
      router.post('/verify-email', [AuthController, 'verifyEmail']).use(middleware.auth())
      router.post('/resend-otp-email', [AuthController, 'resendOtpEmail']).use(middleware.auth())
      router.post('/verify-sms', [AuthController, 'verifySMS']).use(middleware.auth())
      router.post('/resend-otp-sms', [AuthController, 'resendOtpSms']).use(middleware.auth())
      router.get('admin', [AuthController, 'isAdmin']).use(middleware.admin())
    })
    .prefix('auth')
}
