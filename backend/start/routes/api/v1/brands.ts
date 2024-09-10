const BrandController = () => import('#controllers/watch/brand_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function brandsRoutes() {
  router
    .group(() => {
      router.get('/', [BrandController, 'getAllBrands'])
      router.get('/:id', [BrandController, 'getBrandById'])
      router.post('/', [BrandController, 'createBrand']).use(middleware.admin())
      //   router.put('/:id', [WatchController, 'updateSubscription']).use(middleware.admin())
    })
    .prefix('brand')
}
