function StylesheetTag(url) {
  return `
<link rel="stylesheet" href="${url}" />
  `.trim()
}

module.exports = StylesheetTag
