import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-hex-3498db text-white cursor-pointer hover:bg-hex-2980b9 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-hex-3498db'],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
    }),
  ],
})
