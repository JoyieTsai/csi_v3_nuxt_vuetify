import axios from 'axios'

export const state = () => ({
  articleList: [],
  ourTeams: [],
  jobList: [],
  publicSafetyList: [],
  justiceCourtList: [],
  crimeIntelligenceList: [],
  capabilityList: [],
  testimonialList: [],
  // socialFeedList: [],
  currentArticle: [],
  currentProduct: [],
  filterType: 'all',
  filterTag: [],
  currentPage: 1,
})

export const mutations = {
  setArticles(state, payload) {
    state.articleList = payload
  },
  setCurrentArticle(state, payload) {
    state.currentArticle = payload
  },
  setFilteredType(state, payload) {
    state.filterType = payload
  },
  setFilteredTag(state, payload) {
    state.filterTag = payload
  },
  setTeams(state, payload) {
    state.ourTeams = payload
  },
  setCurrentPage(state, payload) {
    state.currentPage = payload
  },
  setJobs(state, payload) {
    state.jobList = payload
  },
  setPublicSafety(state, payload) {
    state.publicSafetyList = payload
  },
  setCurrentProduct(state, payload) {
    state.currentProduct = payload
  },
  setJusticeCourt(state, payload) {
    state.justiceCourtList = payload
  },
  setCrimeIntelligence(state, payload) {
    state.crimeIntelligenceList = payload
  },
  setCapabilities(state, payload) {
    state.capabilityList = payload
  },
  setTestimonials(state, payload) {
    state.testimonialList = payload
  },
  // setSocialFeed(state, payload) {
  //   state.socialFeedList = payload
  // },
}

export const actions = {
  async getArticles({ commit }) {
    // For test use > test/articles.json
    const api = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/test/articles.json'
    )
    const payload = api.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    commit('setArticles', payload)
  },
  async getTeams({ commit }) {
    const api = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/leadership.json'
    )
    const payload = api.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    commit('setTeams', payload)
  },
  changeFilteredType({ commit }, payload) {
    commit('setFilteredType', payload)
  },
  changeFilteredTag({ commit }, payload) {
    commit('setFilteredTag', payload)
  },
  changeCurrentPage({ commit }, payload) {
    commit('setCurrentPage', payload)
  },
  async getArticleByID({ commit }, id) {
    const api = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/test/articles.json'
    )
    const payload = api.data.filter((res) => res.id === id)
    commit('setCurrentArticle', payload[0])
  },
  async getJobs({ commit }) {
    const payload = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/jobs.json'
    )
    commit('setJobs', payload)
  },
  async getPublicSafety({ commit }) {
    const payload = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/test/public-safety.json'
    )
    commit('setPublicSafety', payload)
  },
  async getPublicSafetyByID({ commit }, id) {
    const api = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/test/public-safety.json'
    )
    const payload = api.data.filter((res) => res.id === id)
    commit('setCurrentProduct', payload[0])
  },
  async getJusticeCourt({ commit }) {
    const payload = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/justice-courts.json'
    )
    commit('setJusticeCourt', payload)
  },
  async getCrimeIntelligence({ commit }) {
    const payload = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/crime-intelligence.json'
    )
    commit('setCrimeIntelligence', payload)
  },
  async getCapabilities({ commit }) {
    const payload = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/capabilities.json'
    )
    commit('setCapabilities', payload)
  },
  async getTestimonials({ commit }) {
    const payload = await axios.get(
      'https://csi-web3-resources-default-rtdb.firebaseio.com/testimonials.json'
    )
    commit('setTestimonials', payload)
  },
  // async getSocialFeed({ commit }) {
  //   const payload = await axios.get(
  //     'https://csi-web3-resources-default-rtdb.firebaseio.com/social-feed.json'
  //   )
  //   commit('setSocialFeed', payload)
  // },
}

export const getters = {
  filterArticles: (state) => {
    const activeArticles = state.articleList.filter(
      (art) => art.active !== false
    )

    if (state.filterType === 'all') {
      // type = all
      if (state.filterTag.length > 0) {
        // have selected tags
        const filtered = activeArticles.filter((art) => art.tags) // get all articles with tags
        const result = []
        filtered.forEach((item) => {
          item.tags.forEach((res) => {
            state.filterTag.forEach((tag) => {
              if (tag === res.name) {
                result.push(item)
              }
            })
          })
        })
        const final = [...new Set(result)]
        return final
      } else {
        // no selected tags
        return activeArticles
      }
    } else if (state.filterTag.length > 0) {
      // type = others
      const filtered = activeArticles.filter((art) => art.tags) // get all articles with tags
      const filteredType = filtered.filter(
        (filtered) => filtered.type === state.filterType
      ) // get all articles with tags
      const result = []
      filteredType.forEach((item) => {
        item.tags.forEach((res) => {
          state.filterTag.forEach((tag) => {
            if (tag === res.name) {
              result.push(item)
            }
          })
        })
      })
      const final = [...new Set(result)]
      return final
    } else {
      return activeArticles.filter((art) => art.type === state.filterType)
    }
  },
}
