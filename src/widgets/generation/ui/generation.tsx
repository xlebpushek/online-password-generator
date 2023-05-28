import { PasswordEntity } from '@/entities/password'
import { ActionsFeature } from '@/features/actions'
import { ModalFeature } from './modal/modal'

export function GenerationWidget() {
  return (
    <section id="generation" className="flex min-h-screen w-full flex-col items-center justify-center gap-y-5">
      <PasswordEntity />
      <ActionsFeature />
      <ModalFeature />
    </section>
  )
}
