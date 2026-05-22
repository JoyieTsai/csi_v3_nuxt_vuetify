const fs = require('fs')
const path = require('path')
const { buildMetaMap } = require('./meta/build-meta-map')
const { DEFAULT_DESCRIPTION } = require('./meta/constants')

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildMetaTagStrings(meta) {
  const tags = []

  if (meta.keywords) {
    tags.push(`<meta name="keywords" content="${escapeHtml(meta.keywords)}">`)
  }

  tags.push(`<meta property="og:title" content="${escapeHtml(meta.ogTitle)}">`)
  tags.push(
    `<meta property="og:description" content="${escapeHtml(meta.ogDescription)}">`
  )

  if (meta.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(meta.ogImage)}">`)
    tags.push(
      `<meta property="og:image:secure_url" content="${escapeHtml(meta.ogImage)}">`
    )
  }

  tags.push(`<meta property="og:url" content="${escapeHtml(meta.ogUrl)}">`)
  tags.push(`<meta property="twitter:card" content="summary_large_image">`)
  tags.push(
    `<meta property="twitter:title" content="${escapeHtml(meta.ogTitle)}">`
  )
  tags.push(
    `<meta property="twitter:description" content="${escapeHtml(meta.ogDescription)}">`
  )

  if (meta.ogImage) {
    tags.push(
      `<meta property="twitter:image" content="${escapeHtml(meta.ogImage)}">`
    )
  }

  return tags
}

function injectMetaIntoHtml(html, meta) {
  let result = html

  result = result.replace(
    /<title[^>]*>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(meta.title)}</title>`
  )

  if (meta.description) {
    const descriptionPattern =
      /(<meta[^>]*name="description"[^>]*content=")[^"]*(")/is
    if (descriptionPattern.test(result)) {
      result = result.replace(
        descriptionPattern,
        `$1${escapeHtml(meta.description)}$2`
      )
    } else {
      result = result.replace(
        /<head[^>]*>/i,
        `$&\n    <meta name="description" content="${escapeHtml(meta.description)}">`
      )
    }
  }

  result = result.replace(
    /\s*<meta[^>]*(?:property="(?:og:(?!site_name)|twitter:)[^"]+"|name="(?:twitter:|keywords)[^"]+")[^>]*>\s*/gis,
    '\n'
  )

  const metaTags = buildMetaTagStrings(meta).join('\n    ')
  const insertPoint = result.match(/<meta[^>]*property="og:site_name"[^>]*>/i)

  if (insertPoint) {
    result = result.replace(
      insertPoint[0],
      `${insertPoint[0]}\n    ${metaTags}`
    )
  } else {
    result = result.replace('</head>', `    ${metaTags}\n</head>`)
  }

  return result
}

function filePathToRoute(distPath, htmlFilePath) {
  const relativeDir = path.relative(distPath, path.dirname(htmlFilePath))
  if (!relativeDir || relativeDir === '.') return '/'
  return `/${relativeDir.split(path.sep).join('/')}`
}

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkHtmlFiles(fullPath, files)
    } else if (entry.isFile() && entry.name === 'index.html') {
      files.push(fullPath)
    }
  }
  return files
}

async function injectMetaTags(distPath) {
  if (!distPath || !fs.existsSync(distPath)) {
    throw new Error(`Dist directory not found: ${distPath}`)
  }

  const metaMap = await buildMetaMap()
  const htmlFiles = walkHtmlFiles(distPath)
  let updated = 0
  let skipped = 0

  htmlFiles.forEach((htmlFilePath) => {
    const route = filePathToRoute(distPath, htmlFilePath)
    const meta = metaMap.get(route)

    if (!meta) {
      skipped += 1
      return
    }

    const html = fs.readFileSync(htmlFilePath, 'utf8')
    const nextHtml = injectMetaIntoHtml(html, meta)

    if (nextHtml !== html) {
      fs.writeFileSync(htmlFilePath, nextHtml, 'utf8')
      updated += 1
    }
  })

  console.log(
    `[inject-meta-tags] Updated ${updated} files, skipped ${skipped} routes in ${distPath}`
  )

  return { updated, skipped }
}

if (require.main === module) {
  const distPath = process.argv[2]

  injectMetaTags(distPath)
    .then(({ updated }) => {
      if (!updated && !distPath) {
        console.error('Usage: node scripts/inject-meta-tags.js <dist-path>')
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error('[inject-meta-tags] Failed:', error.message)
      process.exit(1)
    })
}

module.exports = {
  injectMetaTags,
  injectMetaIntoHtml,
}
