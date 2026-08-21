import axios from 'axios'
import { API } from '~/config/api'
import localJobs from '~/data/jobs.json'

export const state = () => ({
  articleList: [],
  staffList: [],
  ourTeams: [],
  jobList: [],
  publicSafetyList: [],
  justiceCourtList: [],
  crimeIntelligenceList: [],
  capabilityList: [],
  testimonialList: [],
  currentArticle: [],
  currentStaff: [],
  currentProduct: [],
  currentCapability: [],
  filterType: 'all',
  filterTag: [],
  currentPage: 1,
})

export const mutations = {
  setArticles(state, payload) {
    state.articleList = payload
  },
  setStaff(state, payload) {
    state.staffList = payload
  },
  setCurrentArticle(state, payload) {
    state.currentArticle = payload
  },
  setCurrentStaff(state, payload) {
    state.currentStaff = payload
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
  setCurrentCapability(state, payload) {
    state.currentCapability = payload
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
}

export const actions = {
  async getArticles({ commit }) {
    const api = await axios.get(API.articles)
    const payload = api.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    commit('setArticles', payload)
  },
  async getStaff({ commit }) {
    const api = await axios.get(API.staff)
    const payload = api.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    commit('setStaff', payload)
  },
  async getTeams({ commit }) {
    const api = await axios.get(API.leadership)
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
    const api = await axios.get(API.articles)
    const payload = api.data.filter((res) => res.id === id)
    commit('setCurrentArticle', payload[0])
  },
  async getStaffByID({ commit }, id) {
    const api = await axios.get(API.staff)
    const payload = api.data.filter((res) => res.uid === id)
    commit('setCurrentStaff', payload[0])
  },
  async getJobs({ commit }) {
    if (process.dev) {
      commit('setJobs', localJobs)
      return
    }
    const api = await axios.get(API.jobs)
    commit('setJobs', api.data)
  },
  async getPublicSafety({ commit }) {
    const api = await axios.get(API.publicSafety)
    commit('setPublicSafety', api.data)
  },
  async getPublicSafetyByID({ commit }, id) {
    const api = await axios.get(API.publicSafety)
    const payload = api.data.filter((res) => res.id === id)
    commit('setCurrentProduct', payload[0])
  },
  async getCapabilityByID({ commit }, id) {
    const api = await axios.get(API.capabilities)
    const payload = api.data.filter((res) => res.id === id)
    commit('setCurrentCapability', payload[0])
  },
  async getJusticeCourt({ commit }) {
    const api = await axios.get(API.justiceCourts)
    commit('setJusticeCourt', api.data)
  },
  async getCrimeIntelligence({ commit }) {
    const api = await axios.get(API.crimeIntelligence)
    commit('setCrimeIntelligence', api.data)
  },
  async getCapabilities({ commit }) {
    const api = await axios.get(API.capabilities)
    commit('setCapabilities', api.data)
  },
  async getTestimonials({ commit }) {
    const api = await axios.get(API.testimonials)
    commit('setTestimonials', api.data)
  },
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
