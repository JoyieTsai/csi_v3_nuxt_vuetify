<template>
  <div></div>
</template>

<script>
export default {
  fetch({ query, params, redirect }) {
    if (query.id) {
      switch (query.id) {
        case 'CAD':
          redirect(301, '/public-safety/cad')
          break
        case 'RMS':
          redirect(301, '/public-safety/rms')
          break
      }
    } else if (params.id) {
      switch (params.id) {
        case 'cad':
          redirect(301, '/public-safety/cad')
          break
        case 'rms':
          redirect(301, '/public-safety/rms')
          break
        case 'fire-ems':
          redirect(301, '/public-safety/fire-ems')
          break
        default:
          redirect(404, '/404')
      }
    } else {
      redirect(404, '/404')
    }
  },
}
</script>
