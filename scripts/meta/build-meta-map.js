const axios = require('axios')
const publicSafetyOverview = require('../../data/public-safety-overview.json')
const capabilitiesOverview = require('../../data/capabilities-overview.json')
const {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  API,
} = require('./constants')

function stripHtml(value) {
  if (!value) return ''
  return String(value)
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&reg;/g, '®')
    .replace(/&trade;/g, '™')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}

function pageMeta(title, options = {}) {
  const {
    description = DEFAULT_DESCRIPTION,
    ogDescription = description,
    ogImage,
    path,
    keywords,
    ogTitle,
  } = options

  const pageTitle = title.includes(SITE_NAME) ? title : `${SITE_NAME} | ${title}`

  return {
    title: pageTitle,
    description,
    ogTitle: ogTitle || pageTitle,
    ogDescription,
    ogImage,
    ogUrl: `${SITE_URL}${path}`,
    keywords,
  }
}

function productMeta(category, imageFolder, product) {
  const title = stripHtml(product.title)
  const subtitle = stripHtml(product.subtitle)
  const path = `/${category}/${product.id}`

  return pageMeta(title, {
    description: subtitle,
    ogDescription: subtitle,
    ogImage: product.coverImg
      ? `${SITE_URL}/images/covers/${imageFolder}/${product.coverImg}`
      : undefined,
    path,
    keywords: title,
  })
}

function truncateText(text, maxLength = 160) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.substring(0, maxLength).trim()}...`
}

function extractBodyDescription(body, maxLength = 160) {
  const text = stripHtml(body)
  if (!text) return ''

  const sentenceMatch = text.match(/^[^.!?]+[.!?]/)
  const firstSentence = sentenceMatch ? sentenceMatch[0].trim() : text

  return truncateText(firstSentence, maxLength)
}

function articleMeta(article) {
  const shareTitle = stripHtml(article.shareTitle || article.title)
  let description = stripHtml(article.brief)

  if (!description || description === shareTitle) {
    description = extractBodyDescription(article.body)
  }

  if (!description || description === shareTitle) {
    description = DEFAULT_DESCRIPTION
  }

  const coverPath = article.cover
    ? `${SITE_URL}/images/news/${article.cover}`
    : `${SITE_URL}/images/news/news_temp.svg`

  return {
    title: `${shareTitle} - ${SITE_NAME}`,
    description,
    ogTitle: shareTitle,
    ogDescription: description,
    ogImage: coverPath,
    ogUrl: `${SITE_URL}/resources/${article.id}`,
    keywords: shareTitle,
  }
}

function staffMeta(member) {
  const name = `${member.firstname} ${member.lastname}`.trim()
  const description = member.title || DEFAULT_DESCRIPTION

  return {
    title: `${name} | ${SITE_NAME}`,
    description,
    ogTitle: name,
    ogDescription: description,
    ogImage: member.cover ? `${SITE_URL}/images/team/${member.cover}` : undefined,
    ogUrl: `${SITE_URL}/our-staff/${member.uid}`,
    keywords: name,
  }
}

function buildStaticMetaMap() {
  const map = new Map()

  map.set(
    '/',
    pageMeta('Overview', {
      description: DEFAULT_DESCRIPTION,
      ogDescription:
        "CSI's Comprehensive Software Solutions for Public Safety, Judiciary and Other Government Agencies",
      ogImage: `${SITE_URL}/images/post/home.jpg`,
      path: '',
      keywords: 'Welcome to CSI',
    })
  )

  map.set(
    '/about',
    pageMeta('About CSI', {
      description:
        'CSI Technology Group has over 30 years of experience designing robust, fully configurable eGovernment software. In this time, the company has matured into a successful software and service provider in the criminal justice, intelligence, prosecutorial, and judicial domains. Moreover, CSI has built extensive expertise in data migration, data analytics, and interfacing across disparate systems. As a customer-first organization, we believe the best measure of ROI is a satisfied customer.',
      ogDescription: 'Premier Software Solutions for eGovernment',
      ogImage: `${SITE_URL}/images/post/about.jpg`,
      path: '/about',
    })
  )

  map.set(
    '/contact',
    pageMeta('Contact Us', {
      description:
        'We love hearing from you. If you have any questions or want to schedule a demo, please feel free to get in touch.',
      ogImage: `${SITE_URL}/images/post/contact.jpg`,
      path: '/contact',
    })
  )

  map.set(
    '/resources',
    pageMeta('Resources', {
      description: DEFAULT_DESCRIPTION,
      ogDescription: 'Up to date on news, events, solutions, and products',
      ogImage: `${SITE_URL}/images/post/resources.jpg`,
      path: '/resources',
      keywords: 'Resources',
    })
  )

  map.set(
    '/resources/testimonial',
    pageMeta('Testimonials', {
      description: 'See What Clients Say',
      ogImage: `${SITE_URL}/images/post/testimonial.jpg`,
      path: '/resources/testimonial',
    })
  )

  map.set(
    '/careers',
    pageMeta('Careers', {
      description: 'Join Our Team. Make a Difference',
      ogImage: `${SITE_URL}/images/post/careers.jpg`,
      path: '/careers',
    })
  )

  map.set(
    '/job',
    pageMeta('Join Our Team', {
      description: 'Join Our Team',
      ogImage: `${SITE_URL}/images/post/job.jpg`,
      path: '/job',
    })
  )

  map.set(
    '/policy',
    pageMeta('Privacy Policy', {
      description: 'Privacy Policy',
      path: '/policy',
    })
  )

  map.set(
    '/terms',
    pageMeta('Terms of Use', {
      description: 'Terms of Use',
      path: '/terms',
    })
  )

  map.set(
    '/public-safety',
    pageMeta(publicSafetyOverview.title, {
      description: publicSafetyOverview.descContent,
      ogDescription: publicSafetyOverview.subtitle,
      ogImage: `${SITE_URL}/images/covers/public-safety/${publicSafetyOverview.coverImg}`,
      path: '/public-safety',
      keywords: publicSafetyOverview.title,
    })
  )

  map.set(
    '/capabilities',
    pageMeta(capabilitiesOverview.title, {
      description: capabilitiesOverview.descContent,
      ogDescription: capabilitiesOverview.subtitle,
      ogImage: `${SITE_URL}/images/covers/capabilities/${capabilitiesOverview.coverImg}`,
      path: '/capabilities',
      keywords: capabilitiesOverview.title,
    })
  )

  return map
}

async function buildMetaMap() {
  const map = buildStaticMetaMap()

  const [
    articlesRes,
    publicSafetyRes,
    justiceCourtsRes,
    crimeIntelligenceRes,
    capabilitiesRes,
    staffRes,
  ] = await Promise.all([
    axios.get(API.articles),
    axios.get(API.publicSafety),
    axios.get(API.justiceCourts),
    axios.get(API.crimeIntelligence),
    axios.get(API.capabilities),
    axios.get(API.staff),
  ])

  articlesRes.data.forEach((article) => {
    map.set(`/resources/${article.id}`, articleMeta(article))
  })

  publicSafetyRes.data.forEach((product) => {
    map.set(
      `/public-safety/${product.id}`,
      productMeta('public-safety', 'public-safety', product)
    )
  })

  justiceCourtsRes.data.forEach((product) => {
    map.set(
      `/justice-courts/${product.id}`,
      productMeta('justice-courts', 'justice-courts', product)
    )
  })

  crimeIntelligenceRes.data.forEach((product) => {
    map.set(
      `/crime-intelligence/${product.id}`,
      productMeta('crime-intelligence', 'crime-intelligence', product)
    )
  })

  capabilitiesRes.data.forEach((product) => {
    map.set(
      `/capabilities/${product.id}`,
      productMeta('capabilities', 'capabilities', product)
    )
  })

  staffRes.data.forEach((member) => {
    map.set(`/our-staff/${member.uid}`, staffMeta(member))
  })

  return map
}

module.exports = {
  buildMetaMap,
  stripHtml,
  extractBodyDescription,
  truncateText,
}
