const UserController = () => import('#controllers/user_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function usersRoutes() {
  router
    .group(() => {
      router.get('', [UserController, 'getUserConnectedInfo'])
      router.get('all-users', [UserController, 'getAllUsers']).use(middleware.admin())
      router.get(':id', [UserController, 'getUserById'])
    })
    .use(middleware.auth())
    .prefix('user')
}
