import { defineConfig, presetIcons, presetUno, presetWind, UserConfig } from 'unocss'

const config = {
  presets: [presetUno(), presetWind(), presetIcons()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  theme: {
    colors: {
      primary: '#34E0A1',
    },
  },
}

export default defineConfig(config) as UserConfig<typeof config['theme']>
