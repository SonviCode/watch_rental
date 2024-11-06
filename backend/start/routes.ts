/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'

import authRoutes from './routes/api/v1/auth_routes.js'
import subscriptionRoutes from './routes/api/v1/subscriptions_routes.js'
import usersRoutes from './routes/api/v1/users_routes.js'
import watchesRoutes from './routes/api/v1/watches_routes.js'
import brandsRoutes from './routes/api/v1/brands_routes.js'
import materialsRoutes from './routes/api/v1/material_routes.js'
import imagesRoutes from './routes/api/v1/images_routes.js'
import purchaseRoutes from './routes/api/v1/purchase_routes.js'
import rentalsRoutes from './routes/api/v1/rentals_routes.js'
import addressesRoutes from './routes/api/v1/address_routes.js'
import invoiceRoutes from './routes/api/v1/invoices_routes.js'
import statusRoutes from './routes/api/v1/status_routes.js'

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
        purchaseRoutes()
        rentalsRoutes()
        addressesRoutes()
        invoiceRoutes()
        statusRoutes()
      })
      .prefix('v1')
  })
  .prefix('api')
