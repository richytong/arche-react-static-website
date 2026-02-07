/**
 * @name HeadTags
 *
 * @synopsis
 * ```coffeescript [specscript]
 * HeadTags(options {
 *   title: string,
 *   description: string,
 *   url: string, // must be full url
 * }) -> headTags string
 * ```
 */
function HeadTags(options) {
  const {
    title,
    description,
    url,
  } = options

  return `
<title>${title}</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width">
<meta name="description" content="${description}" />
<link rel="canonical" href="${url}">
  `.trim()
}

module.exports = HeadTags
