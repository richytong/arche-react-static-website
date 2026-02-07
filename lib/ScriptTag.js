const ObjectAttributes = require('./ObjectAttributes')

function ScriptTag(url, options = {}) {
  return `
<script src="${url}" ${ObjectAttributes(options)}></script>
  `.trim()
}

module.exports = ScriptTag
