const SITE_NAME = 'CSI Technology Group'
const SITE_URL = 'https://www.csitech.com'
const DEFAULT_DESCRIPTION =
  'CSI provides complete technology solutions to all types of public sector agencies. From the state courts and state police to municipal parking authorities.'

const BASE_URL = 'https://csi-web3-resources-default-rtdb.firebaseio.com'
const TEST_COLLECTIONS = (process.env.FIREBASE_TEST_COLLECTIONS || 'articles,leadership')
  .split(',')
  .map((collection) => collection.trim())
  .filter(Boolean)

function collectionPath(collectionName) {
  const dataEnv = process.env.DATA_ENV || 'production'
  const prefix =
    dataEnv === 'test' && TEST_COLLECTIONS.includes(collectionName) ? '/test' : ''
  return `${BASE_URL}${prefix}/${collectionName}.json`
}

const API = {
  articles: collectionPath('articles'),
  staff: collectionPath('staff'),
  publicSafety: collectionPath('public-safety'),
  justiceCourts: collectionPath('justice-courts'),
  crimeIntelligence: collectionPath('crime-intelligence'),
  capabilities: collectionPath('capabilities'),
}

module.exports = {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  API,
}
