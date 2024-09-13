import Watch from '#models/watch/watch'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'

export default class ImageService {
  static async createImagesWatch(images: MultipartFile[], watch: Watch) {
    for (let image of images) {
      await image.move(app.makePath('public/watchs'), {
        name: `${cuid()}.${image.extname}`,
      })

      const imageUrl = `public/watchs/${image.fileName}`

      await watch.related('imageUrl').create({ imageUrl })
    }
  }
}
