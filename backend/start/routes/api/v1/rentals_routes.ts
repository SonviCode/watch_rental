const RentalController = () => import('#controllers/rental_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function rentalsRoutes() {
  router
    .group(() => {
      router.get('/', [RentalController, 'getAllRentals']).use(middleware.admin())
      router.get('/user/:user_id', [RentalController, 'getRentalsByUserId'])
      router.get('/:id', [RentalController, 'getRentalById'])
      router.post('/', [RentalController, 'createRental'])
      router.put('/unsubscribe/:id', [RentalController, 'unsubscribeRental'])
      router.put('/watches/:id', [RentalController, 'updateWatchesOfRental'])
    })
    .use(middleware.auth())
    .prefix('rental')
}
