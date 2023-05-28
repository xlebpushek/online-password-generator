import { $options } from '@/entities/password'
import { SegmentOptions } from '@/shared/types'
import { useStore } from 'effector-react'
import { SegmentOptionFeature } from './segment-options'

export function SegmentsOptionsWidget() {
  const options = useStore($options)

  return (
    <div className="hide-scrollbar my-auto w-full overflow-y-scroll rounded-lg lg:rounded-3xl">
      <div className="flex flex-wrap gap-10">
        {options.segments.map((segment: SegmentOptions, index: number) => (
          <SegmentOptionFeature key={index} index={index} segment={segment} />
        ))}
      </div>
    </div>
  )
}
