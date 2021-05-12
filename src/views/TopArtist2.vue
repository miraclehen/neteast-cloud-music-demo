<template>
  <v-container>
    <v-row>
      <v-col>
        <Loading v-if="!getTopArtists" />
        <div v-if="getTopArtists" class="headline mb-2 text-center">
          Hot Artists
        </div>
        <v-row no-gutters v-if="getTopArtists">
          <v-col
            v-for="artist in getTopArtists"
            :key="artist.id"
            class="ma-0 pa-0 px-sm-2"
            xs="12"
            sm="6"
            md="4"
            xl="3"
          >
            <ArtistItem
              :id="artist.id"
              :name="artist.name"
              :picUrl="artist.picUrl"
              :alias="artist.alias[0]"
              :musicSize="artist.musicSize"
              :albumSize="artist.albumSize"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'
import ArtistItem from '../components/Common/ArtistItem4'
export default {
  components: {
    Loading,
    ArtistItem
  },
  mounted() {
    this.$store.dispatch('artist/fetchTopArtists')
  },
  computed: {
    ...mapGetters({
      getTopArtists: 'artist/getTopArtists'
    })
  },
  methods: {}
}
</script>
