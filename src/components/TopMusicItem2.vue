<template>
  <v-col class="pa-0 pa-sm-2">
    <loading v-if="getTopMusicListsById[id].length === 0" />

    <v-container
      class="py-0 px-1 pa-sm-2 pt-sm-0"
      fluid
      v-if="getTopMusicListsById[id].length !== 0"
    >
      <div
        class="title"
        :class="this.$vuetify.breakpoint.xs ? 'text-center ml-0' : 'ml-12'"
      >
        {{ getTopMusicListsById[id].name }}
      </div>
      <v-row dense align-content="start">
        <!-- mobile -->
        <template v-if="this.$vuetify.breakpoint.xs">
          <v-col cols="12" class="px-x py-0 my-0">
            <v-btn
              class="my-1"
              @click="setMusicList"
              rounded
              color="primary"
              block
            >
              play list
              <v-icon right>{{ mdiPlayCircleOutline }}</v-icon>
            </v-btn>
          </v-col>

          <music-item-with-pic
            v-for="(item, index) in getTopMusicListsById[id].tracks"
            :key="item.id"
            :name="item.name"
            :artist="item.ar[0].name"
            :imgUrl="item.al.picUrl"
            :id="item.id"
            :index="index"
            :maxItme="maxItem * page"
            @setMusic="setMusic"
          />

          <v-btn
            block
            rounded
            outlined
            color="primay"
            @click.stop="page++"
            v-if="maxItem * page <= getTopMusicListsById[id].tracks.length"
          >
            Load More
            <v-icon right> {{ mdiChevronDown }}</v-icon>
          </v-btn>
        </template>

        <!-- desktop -->
        <template v-else>
          <v-slide-group v-model="model" center-active show-arrows>
            <v-slide-item
              v-for="(item, index) in getTopMusicListsById[id].tracks"
              :key="item.id"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                height="180"
                width="120"
                @click="toggle"
                :color="active ? 'primary' : 'grey lighten-1'"
              >
                <template>
                  <musicItemWithPicSquare
                    :name="item.name"
                    :artist="item.ar[0].name"
                    :imgUrl="item.al.picUrl"
                    :id="item.id"
                    :index="index"
                    :maxItem="maxItem * page"
                    @setMusic="setMusic"
                  />
                </template>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </template>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>
import loading from '../components/Loading'
import musicItemWithPic from './Common/MusicItemWithPic2'
import musicItemWithPicSquare from './Common/MusicItemWithPicSquare2'
import { mdiChevronDown, mdiPlayCircleOutline } from '@mdi/js'
import { mapGetters } from 'vuex'
import MusicItemWithPic from './Common/MusicItemWithPic.vue'
export default {
  props: ['id'],
  components: {
    loading,
    musicItemWithPic,
    musicItemWithPicSquare
  },
  data() {
    return {
      MusicItemWithPic,
      mdiChevronDown,
      mdiPlayCircleOutline,
      maxItem: 30,
      page: 1,
      loadedMusicDetailsList: false,
      model: null
    }
  },
  computed: {
    ...mapGetters({
      getMusicDetailsList: 'player/getMusicDetailsList',
      getTopMusicListsById: 'getTopMusicListsById'
    })
  },
  mounted() {
    this.$store.commit('setTopMusicListsById', this.id)
    this.loadedMusicDetailsList = false
  },
  methods: {
    setMusic(id) {
      if (!this.loadedMusicDetailsList) {
        this.$store.commit(
          'player/setMusicDetailByIdsList',
          this.getTopMusicListsById[this.id].tracks
        )
        this.loadedMusicDetailsList = true
      }
      this.$store.commit('player/setMusicUrlsListByPassIdFromMusicList', id)
    },
    setMusicList() {
      this.$store.commit(
        'player/setMusicDetailByIdsList',
        this.getTopMusicListsById[this.id].tracks
      )
      this.$store.commit('player/setMusicUrlsListById')
    },
    addToPlaylist(item) {
      this.$store.commit('player/addMusicDetailById', item)
      this.$store.commit('player/addMusicUrlsListById')
    }
  }
}
</script>

<style></style>
