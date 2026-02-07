const ObjectAttributes = require('./ObjectAttributes')

function ModuleScriptTag(url, options = {}) {
  return `
<script type="module" src="${url}" ${ObjectAttributes(options)}></script>
  `.trim()
}

module.exports = ModuleScriptTag
