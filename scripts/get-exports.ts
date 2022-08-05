/* eslint-disable */
import { getExportsRuntime } from 'pkg-exports'

;(async () => {
  const exports = await getExportsRuntime('wagmi')
  console.log(exports)
})()
