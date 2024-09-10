const WatchController = () => import('#controllers/watch/watch_controller')

// import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function watchesRoutes() {
  router
    .group(() => {
      router.get('/', [WatchController, 'getAllWatches'])
      router.get('/:id', [WatchController, 'getWatchById'])
      //   router.post('/', [WatchController, 'createSubscription']).use(middleware.admin())
      //   router.put('/:id', [WatchController, 'updateSubscription']).use(middleware.admin())
    })
    .prefix('watch')
}
