const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: "Bruce's Docz",
    description: 'It has never been so easy for me to document all my things!',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: { codemirrorTheme: 'material-palenight' },
        themesDir: 'src',
        docgenConfig: {},
        menu: ['Getting Started', 'Assets', 'Styleguide', 'Components'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: false,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: './public',
        dest: '/public',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: "Bruce's Docz",
        description:
          'It has never been so easy for me to document all my things!',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev',
          templates:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/node_modules/docz-core/dist/templates',
          packageJson:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/package.json',
          docz:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz',
          cache:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/.cache',
          app:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/app',
          appPublic:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/public',
          appNodeModules:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/node_modules',
          appPackageJson:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/package.json',
          appYarnLock:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/node_modules/docz-core/yarn.lock',
          ownNodeModules:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/node_modules/docz-core/node_modules',
          gatsbyConfig:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/gatsby-config.js',
          gatsbyBrowser:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/gatsby-browser.js',
          gatsbyNode:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/gatsby-node.js',
          gatsbySSR:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/gatsby-ssr.js',
          importsJs:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/app/imports.js',
          rootJs:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/app/root.jsx',
          indexJs:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/app/index.jsx',
          indexHtml:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/app/index.html',
          db:
            '/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/app/db.json',
        },
        htmlContext: {
          lang: 'en',
          favicon: '/public/favicon/favicon.png',
          head: {
            meta: [
              { charset: 'utf-8' },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0',
              },
              { 'http-equiv': 'Content-Language', content: 'en' },
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@bruce_bentley' },
              { name: 'twitter:image', content: '/public/images/header.png' },
              {
                name: 'og:title',
                content:
                  "Bruce's Docz - It has never been so easy for me to document all my things!",
              },
              { name: 'og:url', content: 'https://docz.brucebentley.dev' },
              {
                name: 'description',
                content:
                  'It has never been so easy for me to document all my things!',
              },
              {
                name: 'og:description',
                content:
                  'It has never been so easy for me to document all my things!',
              },
              { name: 'og:image', content: '/public/images/header.png' },
              { name: 'apple-mobile-web-app-title', content: "Bruce's Docz" },
              { name: 'theme-color', content: '#000000' },
            ],
            links: [
              {
                rel: 'apple-touch-icon',
                sizes: '57x57',
                href: '/public/favicon/apple-touch-icon-57x57.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '60x60',
                href: '/public/favicon/apple-touch-icon-60x60.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '72x72',
                href: '/public/favicon/apple-touch-icon-72x72.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '76x76',
                href: '/public/favicon/apple-touch-icon-76x76.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '114x114',
                href: '/public/favicon/apple-touch-icon-114x114.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '120x120',
                href: '/public/favicon/apple-touch-icon-120x120.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '144x144',
                href: '/public/favicon/apple-touch-icon-144x144.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '152x152',
                href: '/public/favicon/apple-touch-icon-152x152.png',
                importance: 'low',
              },
              {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/public/favicon/apple-touch-icon-180x180.png',
                importance: 'low',
              },
              {
                rel: 'icon',
                type: 'image/png',
                href: '/public/favicon/favicon-32x32.png',
                sizes: '32x32',
                importance: 'low',
              },
              {
                rel: 'icon',
                type: 'imag/png',
                href: '/public/favicon/android-chrome-192x192.png',
                sizes: '192x192',
                importance: 'low',
              },
              {
                rel: 'icon',
                type: 'image/png',
                href: '/public/favicon/favicon-96x96.png',
                sizes: '96x96',
              },
              {
                rel: 'icon',
                type: 'image/png',
                href: '/public/favicon/favicon-16x16.png',
                sizes: '16x16',
                importance: 'low',
              },
              {
                rel: 'manifest',
                href: '/public/favicon/manifest.json',
                importance: 'low',
              },
              {
                rel: 'mask-icon',
                href: '/public/favicon/safari-pinned-tab.svg',
                color: '#ff0080',
                importance: 'low',
              },
              {
                rel: 'shortcut icon',
                href: '/public/favicon/favicon.ico',
                importance: 'low',
              },
              {
                rel: 'stylesheet',
                href: 'https://codemirror.net/theme/material-palenight.css',
              },
            ],
            scripts: [],
          },
          body: { scripts: [] },
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
