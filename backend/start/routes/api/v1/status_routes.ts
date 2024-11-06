const StatusController = () => import('#controllers/status_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function statusRoutes() {
  router
    .group(() => {
      router.get('/', [StatusController, 'getAllStatus'])
      router.get('/:id', [StatusController, 'getStatusById'])
      router.post('/', [StatusController, 'createStatus'])
      //   router.put('/:id', [WatchController, 'updateSubscription']).use(middleware.admin())
    })
    .use(middleware.admin())
    .prefix('status')
}
