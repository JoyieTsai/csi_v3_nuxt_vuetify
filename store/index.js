import axios from 'axios'

export const state = () => ({
  articleList: [],
  publicSafetyList: [],
  justiceCourtList: [],
  crimeIntelligenceList: [],
  capabilityList: [],
  currentArticle: [],
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
  setCurrentPage(state, payload) {
    state.currentPage = payload
  },
  setPublicSafety(state, payload) {
    state.publicSafetyList = payload
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
}

export const actions = {
  async getArticles({ commit }) {
    const api = await axios.get('https://csi-web3-resources-default-rtdb.firebaseio.com/articles.json')
    const payload = api.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    commit('setArticles', payload)
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
    const api = await axios.get('https://csi-web3-resources-default-rtdb.firebaseio.com/articles.json')
    const payload = api.data.filter((res) => res.id === id)
    commit('setCurrentArticle', payload[0])
  },
  async getPublicSafety({ commit }) {
    const payload = await axios.get('https://csi-web3-resources-default-rtdb.firebaseio.com/public-safety.json')
    commit('setPublicSafety', payload)
  },
  async getJusticeCourt({ commit }) {
    const payload = await axios.get('https://csi-web3-resources-default-rtdb.firebaseio.com/justice-courts.json')
    commit('setJusticeCourt', payload)
  },
  async getCrimeIntelligence({ commit }) {
    const payload = await axios.get('https://csi-web3-resources-default-rtdb.firebaseio.com/crime-intelligence.json')
    commit('setCrimeIntelligence', payload)
  },
  async getCapabilities({ commit }) {
    const payload = await axios.get('https://csi-web3-resources-default-rtdb.firebaseio.com/capabilities.json')
    commit('setCapabilities', payload)
  },
}

export const getters = {
  filterArticles: (state) => {
    if (state.filterType === 'all') { // type = all
      if (state.filterTag.length > 0) { // have selected tags
        const filtered = state.articleList.filter((art) => art.tags) // get all articles with tags
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
      } else { // no selected tags
        return state.articleList
      }
    } else if (state.filterTag.length > 0) { // type = others
      const filtered = state.articleList.filter((art) => art.tags) // get all articles with tags
      const filteredType = filtered.filter((filtered) => filtered.type === state.filterType) // get all articles with tags
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
      return state.articleList.filter((art) => art.type === state.filterType)
    }
  },
}
