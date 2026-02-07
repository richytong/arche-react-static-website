function PageHTML(options) {
  const {
    title,
    description,
    url,
    bodyHTML,
  } = options

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>${title}</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width">
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${url}">

  <script src="https://unpkg.com/react@18.3.0/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18.3.0/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/arche@1.0.0/index.js"></script>
  <script src="/global.js"></script>

  <link rel="stylesheet" href="/index.css" />
</head>

<body>${bodyHTML}</body>

<script src="/index.js" type="module"></script>

</html>
  `.trim()
}

module.exports = PageHTML
