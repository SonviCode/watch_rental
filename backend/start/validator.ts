import vine, { SimpleMessagesProvider, errors } from '@vinejs/vine'
import { ErrorReporterContract, FieldContext, MessagesProviderContact } from '@vinejs/vine/types'

// export class JSONAPIErrorReporter implements ErrorReporterContract {
//   /**
//    * A flag to know if one or more errors have been
//    * reported
//    */
//   hasErrors: boolean = false

//   /**
//    * A collection of errors. Feel free to give accurate types
//    * to this property
//    */
//   errors: any[] = []

//   /**
//    * VineJS call the report method
//    */
//   report(message: string, rule: string, field: FieldContext, meta?: any) {
//     this.hasErrors = true

//     /**
//      * Collecting errors as per the JSONAPI spec
//      */
//     this.errors.push({
//       code: rule,
//       detail: message,
//       source: {
//         pointer: field.wildCardPath,
//       },
//       ...(meta ? { meta } : {}),
//     })
//   }

//   /**
//    * Creates and returns an instance of the
//    * ValidationError class
//    */
//   createError() {
//     return new errors.E_VALIDATION_ERROR(this.errors)
//   }
// }

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

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  'required': 'The {{ field }} field is required',
  'string': 'The value of {{ field }} field must be a string',

  // signup
  'email.unique':
    'Cette adresse email est déjà utilisée, choisissez-en une autre ou connectez-vous.',

  // Error message for the username field
  'username.required': 'Please choose a username for your account',
})

vine.errorReporter = () => new JSONAPIErrorReporter()
