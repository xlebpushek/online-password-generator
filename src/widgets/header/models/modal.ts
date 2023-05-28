import { createEvent, createStore } from 'effector'

export const setModalIsActive = createEvent<boolean>()
export const toggleModalIsActive = createEvent()
export const $modalIsActive = createStore(false)
  .on(setModalIsActive, (_, payload) => payload)
  .on(toggleModalIsActive, (state) => !state)
