import { CopyFeature } from './copy'
import { OptionsFeature } from './options'
import { RefreshFeature } from './refresh'

export function ActionsFeature() {
  return (
    <div className="flex gap-x-3">
      <CopyFeature />
      <RefreshFeature />
      <OptionsFeature />
    </div>
  )
}
