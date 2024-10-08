import Watch from '#models/watch/watch'

export default class WatchRepository {
  static async get() {
    return await Watch.query()
      .preload('brand')
      .preload('material')
      .preload('subscription')
      .preload('images')
  }

  static async getByElements(elements: Record<string, any>) {
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
      .preload('brand')
      .preload('material')
      .preload('subscription')
      .preload('images')
  }
}
