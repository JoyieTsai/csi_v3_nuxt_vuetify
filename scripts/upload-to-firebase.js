/**
 * Upload local /data/*.json files to Firebase Realtime Database.
 *
 * Usage:
 *   node scripts/upload-to-firebase.js staff
 *   node scripts/upload-to-firebase.js staff leadership
 *   node scripts/upload-to-firebase.js --all
 *   node scripts/upload-to-firebase.js staff --dry-run
 *   DATA_ENV=test node scripts/upload-to-firebase.js articles
 *
 * Logs append to logs/firebase-uploads.jsonl (gitignored).
 */

const fs = require('fs')
const path = require('path')
const os = require('os')
const axios = require('axios')

const BASE_URL = 'https://csi-web3-resources-default-rtdb.firebaseio.com'
const DATA_ENV = process.env.DATA_ENV || 'production'
const TEST_COLLECTIONS = (process.env.FIREBASE_TEST_COLLECTIONS || 'articles,leadership')
  .split(',')
  .map((collection) => collection.trim())
  .filter(Boolean)
const LOG_FILE = path.join(process.cwd(), 'logs/firebase-uploads.jsonl')

const collectionPath = (collectionName) => {
  const prefix =
    DATA_ENV === 'test' && TEST_COLLECTIONS.includes(collectionName)
      ? '/test'
      : ''

  return `${BASE_URL}${prefix}/${collectionName}.json`
}

const COLLECTION_FILES = {
  articles: 'data/articles.json',
  staff: 'data/staff.json',
  leadership: 'data/leadership.json',
  jobs: 'data/jobs.json',
  'public-safety': 'data/public-safety.json',
  'justice-courts': 'data/justice-courts.json',
  'crime-intelligence': 'data/crime-intelligence.json',
  capabilities: 'data/capabilities.json',
  testimonials: 'data/testimonials.json',
}

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const collections = args.filter((arg) => !arg.startsWith('--'))

if (collections.includes('--all')) {
  collections.length = 0
  collections.push(...Object.keys(COLLECTION_FILES))
}

if (collections.length === 0) {
  console.error(`
Upload local JSON to Firebase Realtime Database.

Usage:
  node scripts/upload-to-firebase.js <collection> [collection...]
  node scripts/upload-to-firebase.js --all
  node scripts/upload-to-firebase.js staff --dry-run

Collections:
  ${Object.keys(COLLECTION_FILES).join(', ')}

Environment:
  DATA_ENV=${DATA_ENV}
  test prefix collections: ${TEST_COLLECTIONS.join(', ') || '(none)'}

Log file:
  ${LOG_FILE}
`)
  process.exit(1)
}

const readCollection = (collection) => {
  const filePath = path.join(process.cwd(), COLLECTION_FILES[collection])

  if (!COLLECTION_FILES[collection]) {
    throw new Error(`Unknown collection "${collection}"`)
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${COLLECTION_FILES[collection]}`)
  }

  const raw = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(raw)

  if (!Array.isArray(data)) {
    throw new Error(`${COLLECTION_FILES[collection]} must be a JSON array`)
  }

  const stats = fs.statSync(filePath)

  return {
    filePath,
    relativeFile: COLLECTION_FILES[collection],
    data,
    count: data.length,
    fileModifiedAt: stats.mtime.toISOString(),
  }
}

const appendUploadLog = (entry) => {
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true })
  fs.appendFileSync(LOG_FILE, `${JSON.stringify(entry)}\n`, 'utf8')
}

const buildLogEntry = ({ status, results, error }) => ({
  timestamp: new Date().toISOString(),
  dataEnv: DATA_ENV,
  dryRun,
  status,
  user: process.env.USER || process.env.USERNAME || 'unknown',
  host: os.hostname(),
  command: process.argv.slice(1).join(' '),
  collections: results,
  error: error || null,
})

const uploadCollection = async (collection) => {
  const { filePath, relativeFile, data, count, fileModifiedAt } =
    readCollection(collection)
  const endpoint = collectionPath(collection)
  const usesTestPath =
    DATA_ENV === 'test' && TEST_COLLECTIONS.includes(collection)

  console.log(`\n${collection}`)
  console.log(`  file:  ${filePath}`)
  console.log(`  items: ${count}`)
  console.log(`  url:   ${endpoint}`)
  console.log(`  env:   ${usesTestPath ? 'test' : 'production'}`)

  const result = {
    name: collection,
    file: relativeFile,
    count,
    url: endpoint,
    env: usesTestPath ? 'test' : 'production',
    fileModifiedAt,
    uploaded: false,
  }

  if (dryRun) {
    console.log('  status: dry-run (skipped upload)')
    return result
  }

  await axios.put(endpoint, data)
  result.uploaded = true
  console.log('  status: uploaded')

  return result
}

const main = async () => {
  console.log(`Firebase upload — DATA_ENV=${DATA_ENV}${dryRun ? ' (dry-run)' : ''}`)

  const results = []

  for (const collection of collections) {
    results.push(await uploadCollection(collection))
  }

  appendUploadLog(
    buildLogEntry({
      status: dryRun ? 'dry-run' : 'success',
      results,
    })
  )

  console.log('\nDone.')
  results.forEach(({ name, count }) => {
    console.log(`  ${name}: ${count} items${dryRun ? ' (dry-run)' : ''}`)
  })
  console.log(`\nLog saved: ${LOG_FILE}`)
}

main().catch((error) => {
  const message =
    error.response?.data?.error ||
    error.response?.statusText ||
    error.message

  appendUploadLog(
    buildLogEntry({
      status: 'failed',
      results: [],
      error: message,
    })
  )

  console.error(`\nUpload failed: ${message}`)
  console.error(`Log saved: ${LOG_FILE}`)
  process.exit(1)
})
