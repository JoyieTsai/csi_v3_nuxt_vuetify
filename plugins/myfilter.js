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

export function superscriptTM(text) {
  if (!text) return text
  return text.replace(/InfoShare®/g, 'InfoShare<sup>®</sup>')
}

const filters = { getBrief, nameSplit, positionSplit, superscriptTM }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

export default filters
