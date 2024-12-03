import Subscription from '#models/subscription'
import Brand from '#models/watch/brand'
import Material from '#models/watch/material'
import Watch from '#models/watch/watch'

export default class WatchRepository {
  /**
   * get all watchs
   *
   * @returns all watchs
   */
  static async get() {
    return await Watch.query()
      .preload('brand')
      .preload('material')
      .preload('subscription')
      .preload('images')
  }

  /**
   * get all watchs depending on query string
   *
   * @param elements
   * @returns watchs corresponding to the query filter
   */
  static async getByElements(elements: Record<string, any>) {
    console.log(elements)

    return await Watch.query()
      // get by subscription
      .andWhere((query) => {
        if (Array.isArray(elements.subscription_id)) {
          elements.subscription_id.forEach((sub: any) => {
            query.orWhere('subscription_id', sub)
          })
          return
        }
        if (elements.subscription_id) {
          query.orWhere('subscription_id', elements.subscription_id)
        }
      })
      // get by material
      .andWhere((query) => {
        if (Array.isArray(elements.material_id)) {
          elements.material_id.forEach((mat: any) => {
            query.orWhere('material_id', mat)
          })
          return
        }
        if (elements.material_id) {
          query.orWhere('material_id', elements.material_id)
        }
      })
      // get by brand
      .andWhere((query) => {
        if (Array.isArray(elements.brand_id)) {
          elements.brand_id.forEach((brand: any) => {
            query.orWhere('brand_id', brand)
          })
          return
        }
        if (elements.brand_id) {
          query.orWhere('brand_id', elements.brand_id)
        }
      })
      .andWhere((query) => {
        if (elements.isAvailable) {
          query.andWhere('isAvailable', true)
        }
      })
      .preload('brand')
      .preload('material')
      .preload('subscription')
      .preload('images')
  }

  /**
   * get all watch filter ( brand, material ...)
   */
  static async getWatchFilter() {
    const materials = await Material.all()
    const brands = await Brand.all()
    const subscriptions = await Subscription.all()

    return { materials, brands, subscriptions }
  }

  /**
   * get all watches and rental informations, only for admin
   */
  static async getWatchesAndRental() {
    return await Watch.query()
      .preload('brand')
      .preload('material')
      .preload('subscription')
      .preload('images')
      .preload('rental', (rentalQuery) => {
        rentalQuery
          .pivotColumns(['id', 'date_start', 'date_end'])
          .orderBy('created_at', 'desc')
          .preload('user')
          .preload('status')
          .preload('subscription')
      })
  }

  /**
   * update watch to set availibity to false
   *
   * @param watchId
   */
  static async setWatchAvailibityToFalse(watchId: string) {
    await Watch.query().where('id', watchId).update({ isAvailable: false })
  }
}
