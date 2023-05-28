import classNames from 'classnames'

interface CheckboxInputProps {
  checked: boolean | undefined
  onChange: () => void | undefined
}

export function CheckboxInputFeature({ checked, onChange }: CheckboxInputProps) {
  const onChangeHandler = () => onChange()

  return (
    <button
      onClick={onChangeHandler}
      className={classNames(
        'relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-dark after:absolute after:rounded-full after:bg-dark after:duration-500 after:content-[""] dark:border-light after:dark:bg-light',
        checked ? 'after:h-3 after:w-3 after:opacity-100' : 'after:h-0 after:w-0 after:opacity-0',
      )}
    />
  )
}
