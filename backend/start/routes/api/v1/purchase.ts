const PurchaseController = () => import('#controllers/purchase_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function purchaseRoutes() {
  router
    .group(() => {
      router
        .post('/create-payment-intent', [PurchaseController, 'createPaymentIntent'])
        .use(middleware.auth())
      router.get('/session-status', [PurchaseController, 'getSessionStatus']).use(middleware.auth())
    })
    .prefix('purchase')
}
