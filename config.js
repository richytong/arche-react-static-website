const ScriptTag = require('./lib/ScriptTag')
const StylesheetTag = require('./lib/StylesheetTag')

const scripts = [
  ScriptTag('https://unpkg.com/react@18.3.0/umd/react.production.min.js', {
    crossorigin: true,
  }),
  ScriptTag('https://unpkg.com/react-dom@18.3.0/umd/react-dom.production.min.js', {
    crossorigin: true,
  }),
  ScriptTag('https://unpkg.com/arche@0.3.10/index.js', {
    crossorigin: true,
  }),
  ScriptTag('/global.js'),
]

const stylesheets = [
  StylesheetTag('/index.css'),
]

module.exports = {
  domain: 'my-domain.com',

  publicDir: 'public',

  pages: [
    {
      title: 'Arche Static Website',
      description: 'A static website built with Arche',
      url: '/',
      filepath: '/index.html',
      scripts,
      stylesheets,
    },
    {
      title: 'Another Page - Arche Static Website',
      description: 'Another page in the static website built with Arche',
      url: '/another-page',
      filepath: '/another-page.html',
      scripts,
      stylesheets,
    }
  ],
}
