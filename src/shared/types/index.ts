import { Separators } from '@/shared/config'

export type Separator = (typeof Separators)[keyof typeof Separators]

export interface GeneralOptions {
  separator: Separator
  isExcludeSeparatingCharacters: boolean
}

export interface SegmentOptions {
  length: number
  isNumbers: boolean
  isSymbols: boolean
  isLowercase: boolean
  isUppercase: boolean
  customCharacters: string
  isExcludeSimilarCharacters: boolean
}

export interface Options extends GeneralOptions {
  segments: SegmentOptions[]
}
