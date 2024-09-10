/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

import authRoutes from './routes/api/v1/auth.js'
import subscriptionRoutes from './routes/api/v1/subscriptions.js'
import usersRoutes from './routes/api/v1/users.js'
import watchesRoutes from './routes/api/v1/watches.js'

router
  .group(() => {
    router
      .group(() => {
        authRoutes()
        usersRoutes()
        subscriptionRoutes()
        watchesRoutes()
      })
      .prefix('v1')
  })
  .prefix('api')
