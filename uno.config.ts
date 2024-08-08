import transformerVariantGroup from '@unocss/transformer-variant-group'
import type { UserConfig } from 'unocss'
import { defineConfig, presetIcons, presetUno, presetWind } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

const config: UserConfig = {
  presets: [presetUno(), presetWind(), presetIcons(), presetAnimations(), presetShadcn()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  theme: {},
  safelist: ['animate-fade-in', '!animate-duration-360'],
  transformers: [transformerVariantGroup()],
}

export default defineConfig(config)
