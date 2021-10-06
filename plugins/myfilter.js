import Vue from 'vue'

export function getBrief(text, amount) {
  return text.length > amount ? text.substring(0, amount) + '...' : text
}

export function nameSplit(text) {
  return text.split('-').join(' ')
}

export function positionSplit(text) {
  return text.split('-').join('-<br>')
}

const filters = { getBrief, nameSplit, positionSplit }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

export default filters
