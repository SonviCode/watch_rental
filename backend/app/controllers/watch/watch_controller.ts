import Watch from '#models/watch/watch'
import WatchRepository from '#repositories/watch/watch_repository'

import ImageService from '#services/image_service'
import { createWatchValidator } from '#validators/watch'
import type { HttpContext } from '@adonisjs/core/http'

export default class WatchController {
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

  async getWatchsByElements({ request, response }: HttpContext) {
    return WatchRepository.getByElements(request.qs())
      .then((watches) => response.status(200).send(watches))
      .catch(() => response.abort({ message: 'Cannot get watches' }))
  }

  // async getWatchsByElements({ request, response }: HttpContext) {
  //   // console.log(request.param)
  //   // console.log(request.param('title'))
  //   console.log(request.all())
  //   console.log(request.params())

  //   const watchSub = request.param('filter')

  //   console.log(watchSub)

  //   const watch = await Watch.findManyBy(watchSub)

  //   return response.ok(watch)
  // }

  async addWatch({ request, response }: HttpContext) {
    const images = request.files('imageUrl')
    const body = await request.validateUsing(createWatchValidator)
    const watch = await Watch.create(body)

    ImageService.createImagesWatch(images, watch)

    return response.ok(watch)
  }

  //   async updateSubscription({ request, response }: HttpContext) {
  //     const body = await request.validateUsing(createSubscriptionValidator)

  //     const subscription = await Subscription.create(body)

  //     return response.ok(subscription)
  //   }
}
