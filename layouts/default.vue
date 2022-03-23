<template>
  <v-app>
    <Header />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getArticles')
  },
}
</script>
