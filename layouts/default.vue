<template>
  <v-app>
    <Header />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getArticles')
  },
}
</script>
