import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import type { Authenticators } from '@adonisjs/auth/types'
import env from '#start/env'

/**
 * Admin middleware is used authenticate HTTP requests and deny
 * access to non-administrator users.
 */
export default class AdminMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   */
  redirectTo = '/'

  async handle(
    ctx: HttpContext,
    next: NextFn,
    options: {
      guards?: (keyof Authenticators)[]
    } = {}
  ) {
    await ctx.auth.authenticateUsing(options.guards, { loginRoute: this.redirectTo })

    const user = await ctx.auth.authenticateUsing()

    if (user.role === env.get('ROLE_ADMIN')) return next()
  }
}
