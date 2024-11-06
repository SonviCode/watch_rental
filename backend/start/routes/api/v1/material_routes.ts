const MaterialController = () => import('#controllers/watch/material_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function materialsRoutes() {
  router
    .group(() => {
      router.get('/', [MaterialController, 'getAllMaterials'])
      router.get('/:id', [MaterialController, 'getMaterialById'])
      router.post('/', [MaterialController, 'createMaterial']).use(middleware.admin())
      //   router.put('/:id', [WatchController, 'updateSubscription']).use(middleware.admin())
    })
    .prefix('material')
}
