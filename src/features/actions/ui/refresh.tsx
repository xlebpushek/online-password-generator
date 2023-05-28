import { $options, setPassword } from '@/entities/password'
import { generatePassword } from '@/shared/lib/generate-password'
import { useStore } from 'effector-react'
import { IoRefreshOutline } from 'react-icons/io5'

export function RefreshFeature() {
  const options = useStore($options)

  const refreshHandler = () => {
    const newPassword = generatePassword(options)

    setPassword(newPassword)
  }

  return (
    <button onClick={refreshHandler}>
      <IoRefreshOutline size={28} />
    </button>
  )
}
