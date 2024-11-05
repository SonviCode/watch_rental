import puppeteer from 'puppeteer'
import fs from 'node:fs/promises'
import path from 'node:path'
import edge from 'edge.js'
import Invoice from '#models/invoice'
import Rental from '#models/rental'

export const generatePDFfromHTML = async (
  templateName: string,
  outputPath: string,
  data: { invoice: Invoice; rental: Rental }
) => {
  const directory = path.dirname(outputPath)

  try {
    await fs.mkdir(directory, { recursive: true })
  } catch (error) {
    console.error('Error during the creation of the directory :', error)
  }

  const BASE_URL = new URL('../../', import.meta.url)

  edge.mount(new URL('resources/views/pdf', BASE_URL))

  console.log(data)

  const htmlContent = await edge.render(templateName, data)

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(htmlContent)
  await page.pdf({ path: outputPath, format: 'A4' })
  await browser.close()
}
