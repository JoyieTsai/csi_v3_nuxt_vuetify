<template>
  <div></div>
</template>

<script>
export default {
  fetch({ params, redirect }) {
    redirect(404, '/404')
  },
}
</script>
