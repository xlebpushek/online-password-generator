import { $options, setOptions } from '@/entities/password'
import { SegmentOptions } from '@/shared/types'
import { CheckboxInputFeature, TextInputFeature } from '@/shared/ui'
import { useStore } from 'effector-react'
import { ChangeEvent, useCallback } from 'react'

interface SegmentOptionsProps {
  index: number
  segment: SegmentOptions
}

export function SegmentOptionFeature({ index, segment }: SegmentOptionsProps) {
  const options = useStore($options)

  const segmentLengthChangeHandler = useCallback(
    (i: number, event: ChangeEvent<HTMLInputElement>) => {
      setOptions({
        ...options,
        segments: options.segments.map((segment, j) =>
          i === j ? { ...segment, length: parseInt(event.target.value) || 0 } : segment,
        ),
      })
    },
    [options],
  )

  const segmentCheckboxChangeHandler = useCallback(
    (i: number, field: 'isNumbers' | 'isSymbols' | 'isLowercase' | 'isUppercase' | 'isExcludeSimilarCharacters') => {
      setOptions({
        ...options,
        segments: options.segments.map((segment, j) => (i === j ? { ...segment, [field]: !segment[field] } : segment)),
      })
    },
    [options],
  )

  return (
    <div key={index} className="mx-auto flex max-w-max flex-col items-center justify-center gap-y-2">
      <h1 className="text-xl font-bold">Segment №{index + 1}</h1>
      <span className="flex w-full items-center justify-between gap-x-2">
        <h2 className="text-base font-medium lg:text-lg">Length</h2>
        <TextInputFeature
          maxLength={3}
          value={segment.length?.toString()}
          onChange={(event) => segmentLengthChangeHandler(index, event)}
        />
      </span>
      <span className="flex w-full items-center justify-between gap-x-2">
        <h2 className="text-base font-medium lg:text-lg">Include numbers ?</h2>
        <CheckboxInputFeature
          checked={segment.isNumbers}
          onChange={() => segmentCheckboxChangeHandler(index, 'isNumbers')}
        />
      </span>
      <span className="flex w-full items-center justify-between gap-x-2">
        <h2 className="text-base font-medium lg:text-lg">Include symbols ?</h2>
        <CheckboxInputFeature
          checked={segment.isSymbols}
          onChange={() => segmentCheckboxChangeHandler(index, 'isSymbols')}
        />
      </span>
      <span className="flex w-full items-center justify-between gap-x-2">
        <h2 className="text-base font-medium lg:text-lg">Include lowercase ?</h2>
        <CheckboxInputFeature
          checked={segment.isLowercase}
          onChange={() => segmentCheckboxChangeHandler(index, 'isLowercase')}
        />
      </span>
      <span className="flex w-full items-center justify-between gap-x-2">
        <h2 className="text-base font-medium lg:text-lg">Include uppercase ?</h2>
        <CheckboxInputFeature
          checked={segment.isUppercase}
          onChange={() => segmentCheckboxChangeHandler(index, 'isUppercase')}
        />
      </span>
      <span className="flex w-full items-center justify-between gap-x-2">
        <h2 className="text-base font-medium lg:text-lg">Exclude similar characters ?</h2>
        <CheckboxInputFeature
          checked={segment.isExcludeSimilarCharacters}
          onChange={() => segmentCheckboxChangeHandler(index, 'isExcludeSimilarCharacters')}
        />
      </span>
    </div>
  )
}
