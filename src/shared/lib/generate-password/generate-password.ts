import { Options, SegmentOptions } from '@/shared/types'
import CryptoJS from 'crypto-js'

export function generatePassword(options: Options): string {
  const numbers = '0123456789'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const segments = options.segments.map((segmentOptions: SegmentOptions) => {
    let allowedChars = ''

    if (segmentOptions.isNumbers) allowedChars += numbers
    if (segmentOptions.isLowercase) allowedChars += lowercase
    if (segmentOptions.isUppercase) allowedChars += uppercase
    if (options.isExcludeSeparatingCharacters && options.separator) allowedChars.replace(options.separator, '')

    if (allowedChars === '') return ''

    let segment = ''

    const bytesNeeded = Math.ceil((Math.log2(allowedChars.length) * segmentOptions.length) / 8)
    const randomBytes = CryptoJS.lib.WordArray.random(bytesNeeded)

    for (let i = 0; i < segmentOptions.length; i++) {
      const byte = randomBytes.words[Math.floor(i / 4)] >>> (24 - 8 * (i % 4))
      const charIndex = byte % allowedChars.length

      segment += allowedChars[charIndex]
    }

    return segment
  })

  return segments.join(options.separator)
}
