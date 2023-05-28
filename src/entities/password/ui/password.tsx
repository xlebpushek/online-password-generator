import { generatePassword } from '@/shared/lib/generate-password'
import { useStore } from 'effector-react'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { $options, $password, setPassword } from '../models/password'

export function PasswordEntity() {
  const options = useStore($options)

  useEffect(() => {
    setPassword(generatePassword(options))
  }, [options])

  const passwordRef = useRef<HTMLHeadingElement>(null)
  const typedRef = useRef<Typed>()

  const password = useStore($password)

  useEffect(() => {
    if (passwordRef.current)
      typedRef.current = new Typed(passwordRef.current, { strings: [password], typeSpeed: 50, showCursor: false })

    return () => {
      if (typedRef.current) typedRef.current.destroy()
    }
  }, [password])

  return <h1 ref={passwordRef} className="h-8 text-xl font-bold tracking-widest sm:text-2xl lg:text-3xl" />
}
