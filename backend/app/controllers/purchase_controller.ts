import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import Stripe from 'stripe'

const stripe = new Stripe(env.get('STRIPE_PRIVATE_KEY').toString())

const calculateOrderAmount = (items: any) => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let total = 0
  items.forEach((item: any) => {
    total += item.amount
  })
  return total
}

export default class PurchaseController {
  async createPaymentIntent({ request, response }: HttpContext) {
    const items = request.input('items')

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'eur',
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    })

    response.send({
      clientSecret: paymentIntent.client_secret,
      // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
    })
  }

  async getSessionStatus({ request, response }: HttpContext) {
    const session = await stripe.checkout.sessions.retrieve(request.input('session_id'))

    response.send({
      status: session.status,
      customer_email: session!.customer_details!.email,
    })
  }
}
