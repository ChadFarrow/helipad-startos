import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_0_2_2_12 } from './v0.2.2_12'
import { v_0_2_2_11 } from './v0.2.2_11'
import { v_0_2_2_8 } from './v0.2.2_8'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_0_2_2_12, v_0_2_2_11, v_0_2_2_8],
})
