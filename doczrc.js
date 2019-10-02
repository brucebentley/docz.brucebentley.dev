import * as path from 'path'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  title: "Bruce's Docz",
  description: 'It has never been so easy for me to document all my things!',
  // indexHtml: 'public/index.html',
  // theme: 'src/theme/index',
  // typescript: false,
  propsParser: false,
  mdPlugins: [],
  // ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
  dest: '/public',
  public: './public',
  htmlContext: {
    lang: 'en',
    favicon: '/public/favicon/favicon.png',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { 'http-equiv': 'Content-Language', content: 'en' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@bruce_bentley' },
        { name: 'twitter:image', content: '/public/images/header.png' },
        { name: 'og:title', content: "Bruce's Docz - It has never been so easy for me to document all my things!" },
        { name: 'og:url', content: 'https://docz.brucebentley.dev' },
        { name: 'description', content: 'It has never been so easy for me to document all my things!' },
        { name: 'og:description', content: 'It has never been so easy for me to document all my things!' },
        { name: 'og:image', content: '/public/images/header.png' },
        { name: 'apple-mobile-web-app-title', content: "Bruce's Docz" },
        { name: 'theme-color', content: '#000000' }
      ],
      links: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/public/favicon/apple-touch-icon-57x57.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/public/favicon/apple-touch-icon-60x60.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/public/favicon/apple-touch-icon-72x72.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/public/favicon/apple-touch-icon-76x76.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/public/favicon/apple-touch-icon-114x114.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/public/favicon/apple-touch-icon-120x120.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/public/favicon/apple-touch-icon-144x144.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/public/favicon/apple-touch-icon-152x152.png', importance: 'low' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/public/favicon/apple-touch-icon-180x180.png', importance: 'low' },
        { rel: 'icon', type: 'image/png', href: '/public/favicon/favicon-32x32.png', sizes: '32x32', importance: 'low' },
        { rel: 'icon', type: 'imag/png', href: '/public/favicon/android-chrome-192x192.png', sizes: '192x192', importance: 'low' },
        { rel: 'icon', type: 'image/png', href: '/public/favicon/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: '/public/favicon/favicon-16x16.png', sizes: '16x16', importance: 'low' },
        { rel: 'manifest', href: '/public/favicon/manifest.json', importance: 'low' },
        { rel: 'mask-icon', href: '/public/favicon/safari-pinned-tab.svg', color: '#ff0080', importance: 'low' },
        { rel: 'shortcut icon', href: '/public/favicon/favicon.ico', importance: 'low' },

        { rel: 'stylesheet', href: 'https://codemirror.net/theme/material-palenight.css' }
      ],
      scripts: []
    },
    body: {
      scripts: []
    }
  },
<<<<<<< HEAD
  menu: ['Getting Started', 'Assets', 'Styleguide', 'Components'],
=======
  menu: ['Getting Started', 'Components'],
>>>>>>> master
  themeConfig: {
    codemirrorTheme: 'material-palenight'
    // mode: 'dark'
  },
  onCreateWebpackChain: config => {
    config.resolve.alias.set('@fonts', `${PUBLIC}/fonts`).set('@images', `${PUBLIC}/images`)

    return config
  }
}
