import Watch from '#models/watch/watch'
import WatchRepository from '#repositories/watch/watch_repository'

import ImageService from '#services/image_service'
import { createWatchValidator } from '#validators/watch_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class WatchController {
  /**
   * get all watchs or get watch depending on query string
   *
   * @param request query string : watch?subscription_id=b0448491-1b4a-4b0d-bf60-85be44e07e42
   * @returns array of watchs
   */
  async getWatches({ request, response }: HttpContext) {
    const params = request.qs()
    const isFetchParams = Object.keys(params).length !== 0

    return isFetchParams
      ? WatchRepository.getByElements(params)
          .then((watches) => response.status(200).send(watches))
          .catch(() => response.abort({ message: 'There is no watches' }))
      : WatchRepository.get()
          .then((watches) => response.status(200).send(watches))
          .catch(() => response.abort({ message: 'Cannot get watches' }))
  }

  /**
   * add a watch, only for admin
   *
   * @param watch data
   * @returns the new watch
   */
  async addWatch({ request, response }: HttpContext) {
    const images = request.files('imageUrl')
    const body = await request.validateUsing(createWatchValidator)
    const watch = await Watch.create(body)

    ImageService.createImagesWatch(images, watch)

    return response.ok(watch)
  }

  /**
   * endpoint to get all watch filters ( brand, subscriptions, material... )
   *
   * @param
   * @returns
   */
  async getWatchFilter({ response }: HttpContext) {
    const categoryFilter = await WatchRepository.getWatchFilter()

    const formattedFilter = [
      {
        keyRequest: 'subscription_id',
        category: categoryFilter.subscriptions,
        name: 'abonnement',
      },
      {
        keyRequest: 'brand_id',
        category: categoryFilter.brands,
        name: 'marque',
      },
      {
        keyRequest: 'material_id',
        category: categoryFilter.materials,
        name: 'matière',
      },
    ]

    return response.ok(formattedFilter)
  }

  /**
   * get watches with rental, only for admin
   *
   * @returns watches with rental informations
   */
  async getWatchesAndRental({ response }: HttpContext) {
    const watchsWithRentalInfo = await WatchRepository.getWatchesAndRental()

    return response.ok(watchsWithRentalInfo)
  }
}
