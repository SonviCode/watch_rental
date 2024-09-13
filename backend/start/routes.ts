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
import brandsRoutes from './routes/api/v1/brands.js'
import materialsRoutes from './routes/api/v1/material.js'
import imagesRoutes from './routes/api/v1/images.js'

router
  .group(() => {
    router
      .group(() => {
        authRoutes()
        usersRoutes()
        subscriptionRoutes()
        watchesRoutes()
        brandsRoutes()
        materialsRoutes()
        imagesRoutes()
      })
      .prefix('v1')
  })
  .prefix('api')
