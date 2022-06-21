module.exports = {
  content: ['./index.html', './src/**/**/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        'logo-light':
            'url(\'/src/assets/img/logo-header-dark.svg\')',
        'logo-black':
            'url(\'/src/assets/img/logo-header-dark.svg\')',
      }),
    },
    // colors: {
    //   'text-color-black-light': '#5A6EE0',
    //   'links-color-blue-light': '#5A6EE0',
    //   'layout-bg-white-light': '#FFFFFF',
    //   'layout-bg-grey-light': '#EBEFF5',
    //
    //   'text-color-black-light': '#FFFFFF',
    //   'links-color-blue-light': '#5A6EE0',
    //   'layout-bg-white-light': '#FFFFFF',
    //   'layout-bg-grey-light': '#EBEFF5',
    // }
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
