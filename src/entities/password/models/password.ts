import { options } from '@/shared/config'
import { Options } from '@/shared/types'
import { createEvent, createStore } from 'effector'

export const setOptions = createEvent<Options>()
export const $options = createStore<Options>(options).on(setOptions, (_, payload) => payload)

export const setPassword = createEvent<string>()
export const $password = createStore<string>('').on(setPassword, (_, payload) => payload)
