const SubscriptionController = () => import('#controllers/subscription_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function subscriptionRoutes() {
  router
    .group(() => {
      router.get('/', [SubscriptionController, 'getAllSubscriptions'])
      router.get('/:id', [SubscriptionController, 'getSubscriptionById'])
      router.post('/', [SubscriptionController, 'createSubscription']).use(middleware.admin())
      router.put('/:id', [SubscriptionController, 'updateSubscription']).use(middleware.admin())
    })
    .prefix('subscription')
}
