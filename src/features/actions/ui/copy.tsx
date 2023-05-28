import { $password } from '@/entities/password'
import { useStore } from 'effector-react'
import { IoCopyOutline } from 'react-icons/io5'

export function CopyFeature() {
  const password = useStore($password)

  const copyHandler = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <button onClick={copyHandler}>
      <IoCopyOutline size={28} />
    </button>
  )
}
