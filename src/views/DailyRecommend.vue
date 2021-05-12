<template>
  <v-container>
    <Loading v-if="!getRecommendSongs" />
    <v-row v-for="(index, song) in getRecommendSongs" :key="song.id">
      <v-col cols="12">
        {{ index }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'
export default {
  components: {
    Loading
  },
  mounted() {
    this.$store.dispatch('recommend/fetchRecommendSongs')
  },
  computed: {
    ...mapGetters({
      getRecommendSongs: 'recommend/getRecommendSongs'
    })
  }
}
</script>

<style></style>
