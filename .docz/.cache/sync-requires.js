const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/README.md"))),
  "component---src-components-button-mdx": hot(preferDefault(require("/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/src/components/Button.mdx"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/src/pages/index.mdx"))),
  "component---src-components-alert-mdx": hot(preferDefault(require("/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/src/components/Alert.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/bruce.bentley/Projects/Personal/docz.brucebentley.dev/.docz/src/pages/404.js")))
}

