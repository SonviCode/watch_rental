import puppeteer from 'puppeteer'
import fs from 'node:fs/promises'
import path from 'node:path'
import edge from 'edge.js'
import Invoice from '#models/invoice'
import Rental from '#models/rental'

/**
 * generate a pdf from html content with puppeteer library
 *
 * @param templateName : the path of the html file
 * @param outputPath : the path for the pdf created in public directory
 * @param data : data needed to write the content
 */
export const generatePDFfromHTML = async (
  templateName: string,
  outputPath: string,
  data: { invoice: Invoice; rental: Rental }
) => {
  const directory = path.dirname(outputPath)

  // create directory if doesn't exist
  try {
    await fs.mkdir(directory, { recursive: true })
  } catch (error) {
    console.error('Error during the creation of the directory :', error)
  }

  // compile html file with edge
  const BASE_URL = new URL('../../', import.meta.url)
  edge.mount(new URL('resources/views/pdf', BASE_URL))
  const htmlContent = await edge.render(templateName, data)

  // create the pdf
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(htmlContent)
  await page.pdf({ path: outputPath, format: 'A4' })
  await browser.close()
}
