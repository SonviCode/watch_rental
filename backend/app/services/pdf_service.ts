import Invoice from '#models/invoice'
import Rental from '#models/rental'
import { generatePDFfromHTML } from '../utils/pdf_utils.js'

export default class PdfService {
  static async createInvoicePdf(invoice: Invoice, rental: Rental) {
    const outputPath = `public/${invoice.pdfUrl}`

    const templateName = 'invoice_pdf_html'

    const pdfData = { invoice, rental }

    generatePDFfromHTML(templateName, outputPath, pdfData)
  }
}
