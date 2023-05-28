import { Metadata } from 'next'
import { Options, SegmentOptions } from '../types'

export const metadata: Metadata = {
  title: 'Online password generator',
  description: 'Online password generator',
  applicationName: 'OPG',
  authors: {
    name: 'Xlebp Rjanoi (Xlebpushek)',
  },
  generator: 'Next.js',
  keywords: ['online', 'password', 'generator'],
  themeColor: {
    color: '#000000',
  },
  colorScheme: 'dark light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  creator: 'Xlebp Rjanoi (Xlebpushek)',
  publisher: 'Vercel',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
  },
  manifest: 'https://xlebpushek.com/manifest.json',
}

export enum Separators {
  Empty = '',
  Space = ' ',
  Dash = '-',
  Underscore = '_',
  Equal = '=',
  Tilde = '~',
}

export const segmentOptions: SegmentOptions = {
  length: 7,
  isNumbers: true,
  isSymbols: false,
  isLowercase: true,
  isUppercase: true,
  customCharacters: '',
  isExcludeSimilarCharacters: false,
}

export const options: Options = {
  segments: Array(3).fill(segmentOptions),
  separator: Separators.Dash,
  isExcludeSeparatingCharacters: true,
}
