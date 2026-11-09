import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.2:12',
  releaseNotes: {
    en_US: `Requires StartOS 0.4.1 or later. Helipad now reads only the credential it needs from LND, and can no longer read LND's seed or other files. Requires LND 0.21.6-beta:3 or later.`,
    es_ES: `Requiere StartOS 0.4.1 o posterior. Helipad ahora lee de LND solo la credencial que necesita y ya no puede leer la semilla ni otros archivos de LND. Requiere LND 0.21.6-beta:3 o posterior.`,
    de_DE: `Erfordert StartOS 0.4.1 oder neuer. Helipad liest von LND nur noch die Zugangsdaten, die es benötigt, und kann den Seed und andere Dateien von LND nicht mehr lesen. Erfordert LND 0.21.6-beta:3 oder neuer.`,
    pl_PL: `Wymaga StartOS 0.4.1 lub nowszego. Helipad odczytuje teraz z LND tylko potrzebne mu dane uwierzytelniające i nie ma już dostępu do seeda ani innych plików LND. Wymaga LND 0.21.6-beta:3 lub nowszego.`,
    fr_FR: `Nécessite StartOS 0.4.1 ou ultérieur. Helipad ne lit plus dans LND que l'identifiant dont il a besoin, et ne peut plus lire la seed ni les autres fichiers de LND. Nécessite LND 0.21.6-beta:3 ou ultérieur.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
