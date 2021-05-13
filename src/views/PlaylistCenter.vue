<template>
  <v-container>
    <Loading v-if="!hignQualityPlaylist" />
    <v-row no-gutters>
      <v-col
        v-for="playlist in hignQualityPlaylist"
        :key="playlist.id"
        cols="4"
        class="ma-0 pa-0 ma-0"
      >
        <PlaylistItem
          :key="playlist.id"
          :name="playlist.name"
          :id="playlist.id"
          :coverImgUrl="playlist.coverImgUrl"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'
import PlaylistItem from '../components/Common/PlaylistItem'
export default {
  mounted() {
    this.$store.dispatch('playList/fetchHignQualityPlaylist')
  },
  computed: {
    ...mapGetters({
      hignQualityPlaylist: 'playList/hignQualityPlaylist'
    })
  },
  components: {
    Loading,
    PlaylistItem
  }
}
</script>

<style></style>
