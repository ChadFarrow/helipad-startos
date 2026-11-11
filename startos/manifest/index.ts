import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'helipad',
  title: 'Helipad',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9-Community/helipad-startos',
  upstreamRepo: 'https://github.com/Podcastindex-org/helipad',
  marketingUrl: 'https://podcastindex.org',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerBuild: {
          // Helipad main (the `latest` tag of 2026-11-07, 3e08784a), pinned by
          // digest because the tag moves. See versions/current.ts.
          buildArgs: {
            IMAGE:
              'podcastindexorg/podcasting20-helipad@sha256:260e1ebc23ae322f0e9aa909f7af801de7b605547cf8a92ca022438cf3531653',
          },
        },
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
