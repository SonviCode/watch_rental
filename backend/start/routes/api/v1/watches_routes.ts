const WatchController = () => import('#controllers/watch/watch_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function watchesRoutes() {
  router
    .group(() => {
      router.get('/', [WatchController, 'getWatches'])
      router.get('/filter', [WatchController, 'getWatchFilter'])
      router.get('/rental', [WatchController, 'getWatchesAndRental']).use(middleware.admin())
      router.post('/', [WatchController, 'addWatch']).use(middleware.admin())
      //   router.put('/:id', [WatchController, 'updateSubscription']).use(middleware.admin())
    })
    .prefix('watch')
}
