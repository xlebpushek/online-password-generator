import { ChangeEvent } from 'react'

interface TextInputProps {
  value: string | undefined
  maxLength?: number | undefined
  onChange: (event: ChangeEvent<HTMLInputElement>) => void | undefined
}

export function TextInputFeature({ value, maxLength, onChange }: TextInputProps) {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => onChange(event)

  return (
    <input
      type="text"
      value={value}
      maxLength={maxLength}
      onChange={onChangeHandler}
      className="border-b border-dark bg-transparent px-2 text-center dark:border-light"
    />
  )
}
