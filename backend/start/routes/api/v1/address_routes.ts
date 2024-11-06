const AddressController = () => import('#controllers/user/address_controller')

import router from '@adonisjs/core/services/router'

export default function addressesRoutes() {
  router
    .group(() => {
      router.get('/', [AddressController, 'getAddresses'])
      router.get('/:id', [AddressController, 'getAddress'])
      router.post('/', [AddressController, 'createAddress'])
    })
    .prefix('address')
}
