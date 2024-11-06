const ImageController = () => import('#controllers/watch/image_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function imagesRoutes() {
  router
    .group(() => {
      router.get('/', [ImageController, 'getAllImages']).use(middleware.admin())
      router.get('/:id', [ImageController, 'getImageById'])
      router.post('/', [ImageController, 'createImage']).use(middleware.admin())
      //   router.put('/:id', [WatchController, 'updateSubscription']).use(middleware.admin())
    })
    .prefix('images')
}
