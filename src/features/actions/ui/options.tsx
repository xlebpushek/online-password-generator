import { setModalIsActive } from '@/widgets/generation'
import { IoOptionsOutline } from 'react-icons/io5'

export function OptionsFeature() {
  const setModalIsActiveHandler = () => {
    document.getElementById('generation')?.scrollIntoView({ behavior: 'smooth' })
    document.firstElementChild?.classList.toggle('no-scroll')

    setModalIsActive(true)
  }

  return (
    <button onClick={setModalIsActiveHandler}>
      <IoOptionsOutline size={28} />
    </button>
  )
}
