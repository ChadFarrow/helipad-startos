import { VersionInfo } from '@start9labs/start-sdk'

// A sideload build, not a registry release: 0.2.2:12 with the image moved to
// Helipad's main branch (2026-11-07, 3e08784a), which reads a fractional
// value_msat_total (2cdca7d6). The label sits between the registry's 12 and
// its next release, so that release replaces it as an ordinary update.
export const current = VersionInfo.of({
  version: '0.2.2:12.1',
  releaseNotes: {
    en_US: `Sideload build. Runs Helipad's main branch from 2026-11-07 (commit 3e08784a) instead of the 0.2.2 release. A boost total that an app sends as a fraction, as Fountain does on each split, is now read instead of shown as 0. Main also includes the new LND and CLN client (LNClient), which no Helipad release has yet. Your data is not changed, so you can go back to 0.2.2:12.`,
  },
  migrations: {
    // Helipad's main changes no table since 0.2.2 (only the default of the
    // resolve_nostr_refs setting for a new install), so both ways are no-ops
    // and going back to 0.2.2:12 keeps every trigger and setting.
    up: async () => {},
    down: async () => {},
  },
})
