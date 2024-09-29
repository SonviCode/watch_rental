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
    console.log(elements)

    // return await Watch.findManyBy(elements)

    return await Watch.query()
      .where(elements)
      .preload('brand')
      .preload('material')
      .preload('subscription')
      .preload('images')
  }
}
