import Invoice from '#models/invoice'
import RentalRepository from '#repositories/rental_repository'
import PdfService from '#services/pdf_service'
import { createInvoiceValidator } from '#validators/invoice_validator'
import type { HttpContext } from '@adonisjs/core/http'
import { addMonth } from '../utils/date_utils.js'
import { generateInvoiceNumber } from '../utils/generation_utils.js'
import InvoiceRepository from '#repositories/invoice_repository'

export default class InvoiceController {
  /**
   * get all invoices only for admin
   *
   * @param { response }
   * @returns all invoices
   */
  async getAllInvoices({ response }: HttpContext) {
    const invoices = await InvoiceRepository.getAll()

    return response.ok(invoices)
  }

  async getInvoiceById({ request, response }: HttpContext) {
    const invoiceId = request.param('id')

    const invoice = await InvoiceRepository.getById(invoiceId)

    return response.ok(invoice)
  }

  async getInvoiceByUserId({ request, response }: HttpContext) {
    const userId = request.param('user_id')

    const invoice = await InvoiceRepository.getByUserId(userId)

    return response.ok(invoice)
  }

  async createInvoice({ request, response }: HttpContext) {
    const body = await request.validateUsing(createInvoiceValidator)

    const invoiceNumber = generateInvoiceNumber(body.subscription.title)

    const invoiceBody = {
      rental_id: body.rental_id,
      amount: body.amount,
      invoice_number: invoiceNumber,
      pdf_url: `pdf/invoice/${invoiceNumber}.pdf`,
      status_id: '4a7dadb5-af08-4074-aa98-feb13a3d264b',
      date_start: new Date(body.date_start),
      date_end: addMonth(new Date(body.date_start), 1),
    }

    const rental = await RentalRepository.getById(body.rental_id)
    const invoice = await Invoice.create(invoiceBody)

    PdfService.createInvoicePdf(invoice, rental)

    return response.ok(invoice)
  }
}
