import { AppData, Launch, Lightning, PlatformSettings } from '@lightningjs/sdk'
import { App } from './App.js'

export default function (
  appSettings: Lightning.Application.Options,
  platformSettings: PlatformSettings,
  appData: AppData
) {
  return Launch(App, appSettings, platformSettings, appData)
}
