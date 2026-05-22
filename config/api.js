const BASE_URL = 'https://csi-web3-resources-default-rtdb.firebaseio.com'

const DATA_ENV = process.env.DATA_ENV || 'production'
const TEST_COLLECTIONS = (
  process.env.FIREBASE_TEST_COLLECTIONS || 'articles,leadership'
)
  .split(',')
  .map((collection) => collection.trim())
  .filter(Boolean)

const collectionPath = (collectionName) => {
  const prefix =
    DATA_ENV === 'test' && TEST_COLLECTIONS.includes(collectionName)
      ? '/test'
      : ''

  return `${BASE_URL}${prefix}/${collectionName}.json`
}

const API = {
  articles: collectionPath('articles'),
  staff: collectionPath('staff'),
  leadership: collectionPath('leadership'),
  jobs: collectionPath('jobs'),
  publicSafety: collectionPath('public-safety'),
  justiceCourts: collectionPath('justice-courts'),
  crimeIntelligence: collectionPath('crime-intelligence'),
  capabilities: collectionPath('capabilities'),
  testimonials: collectionPath('testimonials'),
}

export { BASE_URL, DATA_ENV, TEST_COLLECTIONS, API }
