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
        this.$store.dispatch('getTeams')
        this.$store.dispatch('getTestimonials')
    },
}
</script>
