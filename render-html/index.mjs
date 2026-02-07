#!/usr/bin/env node

import getRootHtml from './getRootHtml.mjs'

const env = process.env.NODE_ENV
const nocache = process.env.NO_CACHE == '1' || process.env.NO_CACHE == 'true'

setImmediate(async () => {
  const path = process.argv[2]

  const html = await getRootHtml({ path })
  console.log(html)

  if (html == '') {
    throw new Error('bad html')
  }
})
