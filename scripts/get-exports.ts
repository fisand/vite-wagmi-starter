/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
import { getExportsRuntime } from 'pkg-exports'

;(async () => {
  const exports = await getExportsRuntime('wagmi')
  console.log(exports)
})()
