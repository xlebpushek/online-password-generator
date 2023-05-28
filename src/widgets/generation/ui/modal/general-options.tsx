import { $options, setOptions } from '@/entities/password'
import { Separators } from '@/shared/config'
import { Separator } from '@/shared/types'
import { CheckboxInputFeature, TextInputFeature } from '@/shared/ui'
import { useStore } from 'effector-react'
import { ChangeEvent, useCallback } from 'react'

export function GeneralOptionsWidget() {
  const options = useStore($options)

  const separatorChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isValidSeparator =
        event.target.value.length <= 3 &&
        Array.from(event.target.value).every((char) => Object.values(Separators).includes(char as Separator))

      const separator: Separator = isValidSeparator ? (event.target.value as Separator) : Separators.Dash

      setOptions({ ...options, separator })
    },
    [options],
  )

  const excludeSeparatingCharactersChangeHandler = useCallback(() => {
    setOptions({ ...options, isExcludeSeparatingCharacters: !options.isExcludeSeparatingCharacters })
  }, [options])

  return (
    <div className="my-auto flex w-full">
      <div className="mx-auto flex max-w-max flex-col items-center justify-center gap-y-2">
        <h1 className="text-xl font-bold">General</h1>
        <span className="flex w-full items-center justify-between gap-x-2">
          <h2 className="text-base font-medium lg:text-lg">Separator</h2>
          <TextInputFeature
            maxLength={3}
            value={options.separator}
            onChange={(event) => separatorChangeHandler(event)}
          />
        </span>
        <span className="flex w-full items-center justify-between gap-x-2">
          <h2 className="text-base font-medium lg:text-lg">Exclude separating characters ?</h2>
          <CheckboxInputFeature
            checked={options.isExcludeSeparatingCharacters}
            onChange={excludeSeparatingCharactersChangeHandler}
          />
        </span>
      </div>
    </div>
  )
}
