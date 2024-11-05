const InvoiceController = () => import('#controllers/invoice_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export default function invoiceRoutes() {
  router
    .group(() => {
      router.get('/', [InvoiceController, 'getInvoices']).use(middleware.admin())
      router.get('/:id', [InvoiceController, 'getInvoiceById'])
      router.get('/user/:user_id', [InvoiceController, 'getInvoiceByUserId'])
      router.post('/', [InvoiceController, 'createInvoice'])
    })
    .use(middleware.auth())
    .prefix('invoice')
}
