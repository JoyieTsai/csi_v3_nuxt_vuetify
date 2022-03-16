import axios from 'axios'

export const state = () => ({
  articleList: [],
  currentArticle: [],
  filterType: 'all',
  filterTag: [],
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
}

export const actions = {
  async getArticles({ commit }) {
    // live https://csi-website-70421.firebaseio.com/articles.json
    // test https://fir-realtimedb-test1.firebaseio.com/articles.json
    const api = await axios.get('api/articles.json')
    const payload = api.data.sort((a, b) => new Date(b.date) - new Date(a.date))
    commit('setArticles', payload)
  },
  changeFilteredType({ commit }, payload) {
    commit('setFilteredType', payload)
  },
  changeFilteredTag({ commit }, payload) {
    commit('setFilteredTag', payload)
  },
  async getArticleByID({ commit }, id) {
    const api = await axios.get('api/articles.json')
    const payload = api.data.filter((res) => res.id === id)
    commit('setCurrentArticle', payload[0])
  },
}

export const getters = {
  filterArticles: (state) => {
    if (state.filterType === 'all') { // type = all
      console.log(1)
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
        return result
      } else { // no selected tags
        return state.articleList
      }
    } else if (state.filterTag.length > 0) { // type = others
      console.log(2)
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
      console.log(3)
      console.log(state.filterTag)
      return state.articleList.filter((art) => art.type === state.filterType)
    }
  },
  // filterArticles: (state) => {
  //   if (state.filterTag.length > 0) {
  //     const filtered = state.articleList.filter((art) => art.tags)
  //     const result = []
  //     filtered.forEach((item) => {
  //       item.tags.forEach((res) => {
  //         state.filterTag.forEach((tag) => {
  //           if (tag === res.name) {
  //             result.push(item)
  //           }
  //         })
  //       })
  //     })
  //     const final = [...new Set(result)]
  //     return final
  //   } else if (state.filterType === 'all') {
  //     return state.articleList
  //   } else {
  //     return state.articleList.filter((art) => art.type === state.filterType)
  //   }
  // },
}
