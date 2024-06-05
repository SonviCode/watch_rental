import vine from '@vinejs/vine'
import { FieldContext, MessagesProviderContact } from '@vinejs/vine/types'

export class CustomMessagesProvider implements MessagesProviderContact {
  /**
   * Returns the error messages for a given rule id and field.
   */
  getMessage(
    defaultMessage: string,
    rule: string,
    field: FieldContext,
    meta?: Record<string, any>
  ) {
    // resolve and return error message from some collection
  }
}
