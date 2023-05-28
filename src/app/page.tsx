'use client'

import { AboutWidget } from '@/widgets/about'
import { GenerationWidget } from '@/widgets/generation'

export default function HomePage() {
  return (
    <>
      <AboutWidget />
      <GenerationWidget />
    </>
  )
}
