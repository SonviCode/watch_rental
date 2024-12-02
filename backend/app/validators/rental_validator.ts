import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createRentalValidator = vine.compile(
  vine.object({
    user_id: vine.string(),
    subscription: vine.any(),
    date_start: vine.string(),
    watch_id: vine.string(),
  })
)

export const updateRentalValidator = vine.compile(
  vine.object({
    subscription_id: vine.string(),
    date_start_of_new_watch: vine.string(),
    watch_id: vine.string(),
  })
)

updateRentalValidator.messagesProvider = new SimpleMessagesProvider({
  'date_start_of_new_watch.required':
    'Vous devez sélectionner une date de récupération pour la nouvelle montre',
})

export const createStatusValidator = vine.compile(
  vine.object({
    statusName: vine.string(),
  })
)
