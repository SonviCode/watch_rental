const RentalController = () => import('#controllers/rental_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function rentalsRoutes() {
  router
    .group(() => {
      router.get('/', [RentalController, 'getRentals'])
      router.get('/:id', [RentalController, 'getRental'])
      router.post('/', [RentalController, 'createRental'])
    })
    .use(middleware.auth())
    .prefix('rental')
}
